import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from './serevices/socket.service';
import { IMessage, MessageTypes } from '../../../../Models/messages';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    @ViewChild('messagesContainer', { static: true }) messagesContainer!: ElementRef;

    public userName = 'Cute Pokemon';
    public chatInitialized = false;

    public messages: any[] = [];
    constructor(private socketService: SocketService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            console.log(data);
            this.socketService.connectToSocket(data['serverAddress'])
                .subscribe(() => {
                    this.initOnMessageReaction();
                    this.getMessages();
                });
        });
    }

    public sendMessage(message: string): void {
        const messageObject: IMessage = {
            text: message,
            user: this.userName,
            time: new Date().toTimeString(),
            type: MessageTypes.userMessage
         }; 
        this.socketService.sendMessage(messageObject);
    }

    public getMessages() {
        this.socketService.getMessages();
    }   

    public initOnMessageReaction(): void {
        this.socketService.onMessage()
            .subscribe((message: IMessage) => {
                console.log('received message', message);
                switch (message.type) {
                    case MessageTypes.userMessage:
                        this.messages.push(message);
                        this.scrollDown();
                        break;
                    case MessageTypes.systemMessage:
                        this.processSystemMessage(message);
                        break;
                 }     
            });
    }

    public processSystemMessage(message: IMessage): void {
        switch (message.text) {
            case 'getAllMessages':
                this.messages = message.data;
                this.scrollDown();
                break;
         }    
    }

    public scrollDown(): void {
        const element = this.messagesContainer.nativeElement;
        setTimeout(() => {
            element.scrollTop = element.scrollHeight;
        });
    }
}
