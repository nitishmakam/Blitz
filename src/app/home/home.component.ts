import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSidenavModule, MatExpansionPanel } from '@angular/material';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';
import { HomeService } from '../home.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

declare let endpoint: any;

export interface User {
  username: String;
}

export interface Answer {
  _id: String;
  text: String;
  created: Date;
  user: User;
}
export interface Question {
  _id: String;
  text: String;
  user: User;
  created: Date;
  answers: Answer[];
}
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
  private questions: Question[];
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
    private homeService: HomeService, private router: Router) {
    this.dialogOpened = false;
    this.showSideNav = false;
    this.endpoint = endpoint;
    this.questions = [];
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.homeService.getQuestions().subscribe(data => {
      this.questions = data as Question[];
      // console.log(this.questions);
    });
    // console.log(data); });
    // console.log(this.questions);
    // .subscribe((data: any) => {
    //   // console.log(data);
    //   this.questions = <Question[]>data;
    //   console.log(this.questions);
    // },
    //   err => {
    //     this.snackBar.openFromComponent(SnackbarComponent, {
    //       duration: 5000,
    //       data: 'Unable to fetch data from server',
    //       horizontalPosition: 'center',
    //       verticalPosition: 'bottom'
    //     });
    //   });
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
                x => {
                  this.snackBar.openFromComponent(SnackbarComponent, {
                    duration: 3000,
                    data: 'Question was published',
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom'
                  });
                  const t = <Question>x;
                  t.user = { username: localStorage.getItem('username') };
                  this.questions.push(t);
                },
                err => {
                  this.snackBar.openFromComponent(SnackbarComponent, {
                    duration: 3000,
                    data: 'Question could not be published',
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom'
                  });
                });
          }
        });
    }
  }
}
