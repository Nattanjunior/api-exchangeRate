import type { NotificationRules } from "../interfaces/NotificationRules";
import amqp from "amqplib/callback_api"

export class NotificationService implements NotificationRules {
  sendNotification(userId: string, message: string): void {
    amqp.connect('amqp://localhost', (error0, connection) => {
      if (error0) {
        throw error0;
      }
      connection.createChannel((error1, channel) => {
        const queue = 'Notifications_exchange';
        channel.assertQueue(queue, { durable: false })
      })
    });
  }
}