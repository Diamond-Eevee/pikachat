const { Server } = require('ws');
import { IMessage, MessageTypes } from "../../Models/messages";
import { IMessagesStorage } from '../model/messages.storage.model';
import { IWebSockets } from '../model/sockets.model';

export class SocketServer {
   constructor(
      private webSockets: IWebSockets, 
      private messagesStorage: IMessagesStorage
   ) { }

    start() {
        this.webSockets.on('connection', (ws) => {
            console.log('New client connected!');
            ws.on('close', () => console.log('Client has disconnected!'));
            ws.on('message', (encodedMessage) => {
               try {
                  const message: IMessage = JSON.parse(encodedMessage.toString());
                  console.log('Received message from client:', message.toString());
         
                  switch (message.type) {
                     case MessageTypes.userMessage:
                        this.messagesStorage.addMessage(message, '');
                        this.sendMessagetoSockets(message)
                        break;
                     case MessageTypes.systemMessage:
                        this.processSystemMessage(ws, message);
                        break;
                  }         
               } catch(err) {
                  console.log(err);
               }      
            });
         });            
    }

    private sendMessagetoSockets(message: IMessage) {
      const messageObject: IMessage = {
         text: message.text,
         user: message.user,
         time: new Date().toTimeString(),
         type: MessageTypes.userMessage
      };
   
      this.webSockets.clients.forEach((client) => {
         client.send(JSON.stringify(messageObject));
      });
   }

    private processSystemMessage(ws, message) {
      switch (message.text) {
         case 'getAllMessages':
            this.messagesStorage.getMessages('')
               .then(messages => {
                  const messageObject: IMessage = {
                     text: 'getAllMessages',
                     user: 'unkwonw',
                     time: new Date().toTimeString(),
                     data: messages,
                     type: MessageTypes.systemMessage
                  }   
         
                  ws.send(JSON.stringify(messageObject));         
               });
            break;
      }  
   }
}


