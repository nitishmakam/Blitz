import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SignInCredentials } from 'src/SignInCredentials';
import { SignUpCredentials } from 'src/SignUpCredentials';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  private sign: boolean;
  private signin: SignInCredentials;
  private signup: SignUpCredentials;
  constructor(private router: Router, private userService: UserService) {
    this.sign = true;
    this.signin = new SignInCredentials();
    this.signup = new SignUpCredentials();
  }

  ngOnInit() {
  }

  signIn() {
    console.log(this.signin);
    this.userService.signIn(this.signin);
  }
  switch() {
    this.sign = !this.sign;
  }
  signUp() {
    console.log(this.signup);
    this.userService.signUp(this.signup);
  }
}
