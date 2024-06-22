// example-dialog.component.ts
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogRef,
    MatDialogTitle,
  } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'gdpr-dialog',
    standalone: true,
    imports: [MatCheckboxModule, FormsModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
    styles: `

    `,
    template: `
    <h2 mat-dialog-title>Development and Testing Webpage Privacy Notice</h2>
    <mat-dialog-content>
        <p>1. User Input: Any information you type in the chat is processed temporarily solely for the purpose of the chat session. This information is not stored permanently.</p>
        <p>2. Cookies: This website stores a dialog acceptance cookie to remember your consent to this privacy notice.</p>
            <h4>Contact Information:</h4>
            <p>If you have any questions or concerns about how your data is being processed, please contact <a mailto="diamond.ms.eevee@gmail.com">diamond.ms.eevee&#64;mail.com</a></p>
            <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
                <h4>User Consent:</h4>
                <mat-checkbox id="consest-checkbox" name="consest-checkbox" ngModel required required>By using this website, you consent to the temporary processing of any information you input during the chat session and the storage of the dialog acceptance cookie.</mat-checkbox>                
                <br><br>
                <button mat-raised-button type="submit" [disabled]="!userForm.form.valid">Submit</button>        
            </form>
    </mat-dialog-content>
  `
})
export class GDPRDialog {
    constructor(public dialogRef: MatDialogRef<any>) {}

    onSubmit(userForm: any): void {
        if (userForm.form.status === 'VALID') {
            this.onClose();
        }
    }

    onClose(): void {
      this.dialogRef.close();
    }
 }