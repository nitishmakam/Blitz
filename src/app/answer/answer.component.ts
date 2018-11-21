import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../home/home.component';

declare let endpoint: any;
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer;
  private endpoint: string;
  constructor() {
    this.endpoint = endpoint;
  }

  ngOnInit() {
  }

}
