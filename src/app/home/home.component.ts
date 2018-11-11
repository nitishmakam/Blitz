import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSidenavModule } from '@angular/material';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';
import { HomeService } from '../home.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { FormControl } from '@angular/forms';

declare let endpoint: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private dialogOpened: boolean;
  private showSideNav: boolean;
  private mode: FormControl;
  private username: string;
  private email: string;
  private endpoint: string;
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private homeService: HomeService) {
    this.dialogOpened = false;
    this.showSideNav = false;
    this.endpoint = endpoint;
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    console.log(endpoint);
  }

  openDialog() {

    if (!this.dialogOpened) {
      const dialogRef = this.dialog.open(
        QuestionDialogComponent,
        {
          closeOnNavigation: true,
        }
      );
      dialogRef.afterClosed()
        .subscribe(text => {
          if (text != null) {
            this.homeService.createQuestion(text)
              .subscribe(
                err => {
                  this.snackBar.openFromComponent(SnackbarComponent, {
                    duration: 3000,
                    data: 'Question was published',
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom'
                  });
                });
          }
        });
    }
  }
}
