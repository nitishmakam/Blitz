import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInCredentials } from 'src/SignInCredentials';
import { SignUpCredentials } from 'src/SignUpCredentials';

declare let endpoint: any;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signIn(signInCredentials: SignInCredentials) {
    this.http.post(endpoint.concat('/signIn'), signInCredentials).subscribe(() => { console.log('Hello'); });
  }
  signUp(signUpCredentials: SignUpCredentials) {
    this.http.post(endpoint.concat('/signUp'), signUpCredentials).subscribe(() => { console.log('hello'); });
  }
}
