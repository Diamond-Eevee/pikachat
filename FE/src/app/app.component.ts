import { Component } from '@angular/core';
import { GDPRService } from './services/gdpr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme;
  title = 'pikachat';

  constructor(private gdprService: GDPRService) {
    this.isDarkTheme = true;
    const theme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);

    this.gdprService.showGDPR();
  }
}
