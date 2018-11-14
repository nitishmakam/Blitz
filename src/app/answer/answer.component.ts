import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../home/home.component';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer;
  constructor() { }

  ngOnInit() {
  }

}
