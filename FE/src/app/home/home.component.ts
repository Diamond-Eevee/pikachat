import { Component } from '@angular/core';
import { DiamondVeeChat } from '../../../../diamond-vee-widgets/src/widgets/diamond-vee-chat/diamond-vee-chat';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() {
    new DiamondVeeChat().init();
  }
}
