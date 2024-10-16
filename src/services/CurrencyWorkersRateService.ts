import amqp from "amqplib/callback_api";

export class CurrencyWorkersRateService {
  GetNotificationExchangeRate() {
    amqp.connect('amqp://localhost', (error0, connection) => {
      if (error0) {
        console.log("Error of conexion of worker:", error0)
        return;
      };
      connection.createChannel((error1, channel) => {
        if (error1) {
          console.log("Error to the create channel of worker:", error1);
          connection.close();
          return;
        };

        const exchange = 'exchange_rate_requests';
        channel.assertExchange(exchange, 'fannout', { durable: true });

        channel.assertQueue('', { exclusive: true }, (error2, q) => {
          if (error2) {
            console.log("Error in line:", error2);
            return;
          };

          channel.bindQueue(q.queue, exchange, '');
          channel.consume(q.queue, async (message) => {
            if (message?.content) {
              const { currency } = JSON.parse(message.content.toString());
              console.log(`Helper processing exchange rate for: ${currency}`);

              
            }
          });
        });
      });
    });
  }
}