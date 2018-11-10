import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MatProgressSpinnerModule } from '@angular/material';

export interface SignInCredentials {
  username: string;
  password: string;
}

export interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

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
  private showPassword: boolean;
  constructor(private router: Router, private userService: UserService) {
    this.sign = true;
    this.usernameValid = false;
    this.usernameValidShow = false;
    this.showLoader = false;
    this.showError = false;
    this.showSuccess = false;
    this.showPassword = false;
    this.signup = <SignUpCredentials>{};
    this.signin = <SignInCredentials>{};
  }

  ngOnInit() {
    localStorage.clear();
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  signTrue() {
    this.sign = true;
    this.showError = false;
    this.showSuccess = false;
    this.errortext = '';
    this.successtext = '';
    this.signup = <SignUpCredentials>{};
    this.signin = <SignInCredentials>{};
    this.usernameValidShow = false;
    this.showPassword = false;

  }
  signFalse() {
    this.sign = false;
    this.showError = false;
    this.showSuccess = false;
    this.errortext = '';
    this.successtext = '';
    this.signup = <SignUpCredentials>{};
    this.signin = <SignInCredentials>{};
    this.usernameValidShow = false;
    this.showPassword = false;
  }
  signIn() {
    this.showError = false;
    this.userService.signIn(this.signin)
      .subscribe(
        x => {
          localStorage.setItem('username', this.signin.username);
          localStorage.setItem('token', x.toString());
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
          this.successtext = 'Account successfully created.';
          this.showSuccess = true;
          console.log(x);
        },
        err => {
          this.errortext = 'Account could not be created. Please try again';
          this.showError = true;
        }
      );
  }
  validateUsername() {
    if (this.signup.username != null && this.signup.username !== '') {
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
    } else {
      this.usernameValidShow = false;
      this.showLoader = false;
    }
  }
}
