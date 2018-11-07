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
  private usernameValid: boolean;
  private usernameValidShow: boolean;
  private signin: SignInCredentials;
  private signup: SignUpCredentials;
  private showLoader: boolean;
  constructor(private router: Router, private userService: UserService) {
    this.sign = true;
    this.signin = new SignInCredentials();
    this.signup = new SignUpCredentials();
    this.usernameValid = false;
    this.usernameValidShow = false;
    this.showLoader = true;
  }

  ngOnInit() {
  }
  signTrue() {
    this.sign = true;
  }
  signFalse() {
    this.sign = false;
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
  validateUsername() {
    this.showLoader = true;
    if (this.signup.username != null && this.signup.username.length !== 0) {
      this.userService.validateUsername(this.signup.username)
        .subscribe(
          x => {
            this.usernameValid = true;
            this.usernameValidShow = true;
            this.showLoader = false;
          },
          err => {
            this.usernameValid = false;
            this.usernameValidShow = true;
            this.showLoader = false;
          });
    }
  }
}
