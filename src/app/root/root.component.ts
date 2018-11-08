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
  private errortext: string;
  private showError: boolean;
  private showLoader: boolean;
  private successtext: string;
  private showSuccess: boolean;
  constructor(private router: Router, private userService: UserService) {
    this.sign = true;
    this.signin = new SignInCredentials();
    this.signup = new SignUpCredentials();
    this.usernameValid = false;
    this.usernameValidShow = false;
    this.showLoader = true;
    this.showError = false;
    this.showSuccess = false;
  }

  ngOnInit() {
  }
  signTrue() {
    this.sign = true;
    this.showError = false;
    this.showSuccess = false;
    this.errortext = '';
    this.successtext = '';

  }
  signFalse() {
    this.sign = false;
    this.showError = false;
    this.showSuccess = false;
    this.errortext = '';
    this.successtext = '';
  }
  signIn() {
    this.showError = false;
    this.userService.signIn(this.signin)
      .subscribe(
        x => {
          localStorage.setItem('username', this.signin.username);
          this.router.navigate(['/home']);
        },
        err => {
          this.errortext = 'Incorrect username or password';
          this.showError = true;
        }
      );
  }
  signUp() {
    this.showSuccess = false;
    this.userService.signUp(this.signup)
      .subscribe(
        x => {
          this.successtext = 'Account successfully created';
          this.showSuccess = true;
        },
        err => {
          this.errortext = 'Account could not be created. Please try again';
          this.showError = true;
        }
      );
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
