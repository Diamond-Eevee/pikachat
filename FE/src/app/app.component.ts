import { Component } from '@angular/core';
import { GDPRService } from './services/gdpr.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme;
  title = 'pikachat';

  constructor(
      private http: HttpClient,
      private gdprService: GDPRService,
      private router: Router
    ) {
    this.isDarkTheme = true;
    const theme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);

    this.http.post('/api/exh', {

    }).subscribe(() => {
      // this.router.navigate(['/chat']);
    });            

    this.gdprService.showGDPR();
  }
}
