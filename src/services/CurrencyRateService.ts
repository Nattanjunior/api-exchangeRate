import type { NotificationRules } from "../interfaces/NotificationRules";
import amqp from "amqplib/callback_api";


export class CurrencyRateService implements NotificationRules {
  PublishNotificationExchangeRateRequest(currency: string): void {
    amqp.connect('amqp://localhost:5672', (error0, connection) => {
      if (error0) {
        console.log('channel error:', error0);
        return;
      };

      connection.createChannel((error1, channel) => {
        if (error1) {
          console.log('channel error:', error1);
          connection.close();
          return;
        };

        const exchange = 'exchange_rate_requests';
        channel.assertExchange(exchange, 'fanout', { durable: true }, (error) => {
          if (error) {
            console.log('Error asserting queue');
            connection.close();
            return;
          }
        });

        const notification = JSON.stringify({ currency });
        channel.publish(exchange, '', Buffer.from(notification), {
          persistent: true
        });
        console.log(`[x] Invitation for exchange rate ${currency} sent`);

        setTimeout(() => {
          channel.close((error) => {
            if (error) {
              console.log("Error closing the channel:", error);
            } else {
              console.log("Channel closed successfully.");
            }
          });
          connection.close((error) => {
            if (error) {
              console.log("Error closing the connection:", error);
            } else {
              console.log("Connection closed successfully.")
            }
          });
        }, 1000);
      });
    });
  };
};