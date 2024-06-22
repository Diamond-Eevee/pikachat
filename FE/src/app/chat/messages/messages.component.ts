import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild  } from '@angular/core';
import { IMessage } from '../../../../../Models/messages';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  @Input() public messages: IMessage[] = [];
}
