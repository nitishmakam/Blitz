import { Component, OnInit, Input } from '@angular/core';
import { Question, User, Answer } from '../home/home.component';
import { MatIcon, MatDialog, MatSnackBar } from '@angular/material';
import { AnswerDialogComponent } from '../answer-dialog/answer-dialog.component';
import { AnswerService } from '../answer.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
declare let endpoint: any;
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  private endpoint: string;
  private upvoted: boolean;
  private dialogOpened: boolean;
  constructor(public dialog: MatDialog,
    private answerService: AnswerService,
    private snackBar: MatSnackBar) {
    this.endpoint = endpoint;
    this.dialogOpened = false;
    this.upvoted = false;
  }

  ngOnInit() {
    this.answerService.upvoteQuestionStatus(this.question._id)
      .subscribe(x => {
        if (x === 'False') {
          this.upvoted = false;
        } else {
          this.upvoted = true;
        }
      });
  }
  upvote() {
    if (!this.upvoted) {
      this.answerService.upvoteQuestion(this.question._id)
        .subscribe(x => {
          this.question.upvotes++;
          this.upvoted = true;
        });
    }
  }
  openDialog() {
    if (!this.dialogOpened) {
      const dialogRef = this.dialog.open(AnswerDialogComponent,
        {
          closeOnNavigation: true,
          data: this.question.text
        });
      dialogRef.afterClosed()
        .subscribe(text => {
          if (text != null) {
            this.answerService.createAnswer(text, this.question._id).subscribe(
              x => {
                this.snackBar.openFromComponent(SnackbarComponent,
                  {
                    duration: 3000,
                    data: 'Answer succesfully posted',
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom'
                  });
                const t = <Answer>x;
                t.user = { username: localStorage.getItem('username') };
                if (this.question.answers == null) {
                  this.question.answers = [];
                }
                this.question.answers.push(t);
              }, err => {
                this.snackBar.openFromComponent(SnackbarComponent,
                  {
                    duration: 3000,
                    data: 'Answer could not be posted',
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom'
                  });
              });
          }
        });
    }
  }

}
