import { ChangeDetectorRef, Component, EventEmitter, Inject, Output } from '@angular/core';

@Component({
  selector: 'send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {
    message: string = '';    
    @Output() messageEvent = new EventEmitter<string>();

    constructor(private changeDetectorRef: ChangeDetectorRef) {
    }

    public onKeyUp(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        this.sendMessage();
      }
    }

    public sendMessage(): void {
      if (this.message) {
        this.messageEvent.emit(this.message);
        this.message = '';
      }      
    }
}
