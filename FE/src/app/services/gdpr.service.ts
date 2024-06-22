import { Injectable } from '@angular/core';
import { GDPRDialog } from './dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class GDPRService {
    constructor(public dialog: MatDialog, private cookieService: CookieService) {}
    
    showGDPR(): void {
        const cookieValue = this.cookieService.get('GDPRAcceptanceCookie');

        if (cookieValue === 'accepted') {
            return;
        }

        const dialogRef = this.dialog.open(GDPRDialog, {
            // width: '100%',
            // position: { bottom: '0' },
            // panelClass: 'bottom-dialog',
            disableClose: true,            
          });
      
          dialogRef.afterClosed().subscribe(result => {
            this.cookieService.set('GDPRAcceptanceCookie', 'accepted', 1);            
          });
    }
}