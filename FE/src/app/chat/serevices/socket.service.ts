import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage, MessageTypes } from '../../../../../Models/messages';

@Injectable({
    providedIn: 'root'
})
export class SocketService {
    public socket: any;

    constructor() { }

    public connectToSocket(URL: string): Observable<any> {

        return new Observable(observer => {            
            const hostname = window.location.hostname;
            const port = window.location.port;
            const wsProtocol = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
            const wsUrl = `${wsProtocol}${hostname}:${port}/ws`;
    
            this.socket = new WebSocket(wsUrl);
            this.socket.addEventListener('open', (event: any) => {
                observer.next();
            });            
        });
    }

    public getMessages(): void {
        const messageObject: IMessage = {
            text: 'getAllMessages',
            user: '',
            time: new Date().toTimeString(),
            type: MessageTypes.systemMessage
         };    
        this.socket.send(JSON.stringify(messageObject));
    }

    public sendMessage(message: IMessage): void {
        this.socket.send(JSON.stringify(message));
    }

    public onMessage(): Observable<any> {
        return new Observable(observer => {
            this.socket.addEventListener('message', (message: any) => {
               observer.next(JSON.parse(message.data));
            });
        });
    }
}