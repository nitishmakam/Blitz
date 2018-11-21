import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../home/home.component';
import { AnswerService } from '../answer.service';

declare let endpoint: any;
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer;
  @Input() qid: string;
  private endpoint: string;
  private upvoted: boolean;
  constructor(private answerService: AnswerService) {
    this.endpoint = endpoint;
    this.upvoted = false;
  }

  ngOnInit() {
    this.answerService.upvoteAnswerStatus(this.qid, this.answer._id)
      .subscribe(x => {
        if (x === 'False') {
          this.upvoted = false;
        } else {
          this.upvoted = true;
        }
      }, err => {
        console.log(err);
      });
  }
  upvote() {
    if (!this.upvoted) {
      this.answerService.upvoteAnswer(this.qid, this.answer._id)
        .subscribe(x => {
          this.answer.upvotes++;
          this.upvoted = true;
        });
    }
  }
}
