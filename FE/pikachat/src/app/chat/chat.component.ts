import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    socket: any;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            console.log(data);
            this.connectToSocket(data['serverAddress']);
        });
    }

    private connectToSocket(URL: string): void {
        this.socket = new WebSocket('ws://localhost:3000');
        this.socket.addEventListener('open', (event: any) => {
          this.socket.send('Hello server!', event);
        });
        this.socket.addEventListener('message', (event: any) => {
          console.log(`Received data: ${event.data}`);
        });
    }
}
