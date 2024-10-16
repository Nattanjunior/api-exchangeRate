import type { NotificationRules } from "../interfaces/NotificationRules";
import amqp from "amqplib/callback_api";

export class NotificationService implements NotificationRules {
  sendNotification(userId: string, message: string): void {
    amqp.connect('amqp://localhost', (error0, connection) => {
      if (error0) {
        console.log('channel error:', error0);
        throw new Error("Channel error0");
      };

      connection.createChannel((error1, channel) => {
        if (error1) {
          console.log('channel error:', error1);
          throw new Error("Channel error1");
        };

        const queue = 'Notifications_exchange';
        channel.assertQueue(queue, { durable: false });

        const notification = JSON.stringify({ userId, message });
        channel.sendToQueue(queue, Buffer.from(notification));
        console.log(`[x] Sent notication to user ${userId}: ${message}`);

        setTimeout(() => {
          connection.close();
        }, 1000)
      });
    });
  }
}