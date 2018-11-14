import { Component, OnInit, Input } from '@angular/core';
import { Question, User } from '../home/home.component';
import { MatIcon } from '@angular/material';
declare let endpoint: any;
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  private endpoint: string;
  constructor() {
    this.endpoint = endpoint;
  }

  ngOnInit() {
    // this.question = <Question>{};
    // this.question.user = <User>{};
  }

}
