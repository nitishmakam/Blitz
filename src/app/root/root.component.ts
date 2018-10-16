import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  private sign: boolean;
  constructor(private router: Router) {
    this.sign = true;
  }

  ngOnInit() {
  }
  toggleSign() {
    this.sign = !this.sign;
  }
}
