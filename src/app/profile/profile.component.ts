import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Question, Answer } from '../home/home.component';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';

declare let endpoint: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private endpoint: string;
  private username: string;
  private email: string;
  private questions: Question[];
  private questionsAnswered: Question[];
  constructor(private profileService: ProfileService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.endpoint = endpoint;
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.profileService.getQuestions()
      .subscribe(x => {
        this.questions = x as Question[];
      },
        err => {
          this.snackBar.openFromComponent(
            SnackbarComponent,
            {
              duration: 3000,
              data: 'Could not fetch data from server'
            }
          );
        });
    this.profileService.getAnswers()
      .subscribe(x => {
        this.questionsAnswered = x as Question[];
      },
        err => {
          this.snackBar.openFromComponent(
            SnackbarComponent,
            {
              duration: 3000,
              data: 'Could not fetch data from server'

            });
        });
  }

}
