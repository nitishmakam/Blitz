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
    return this.http.post(endpoint.concat('/users/signIn'), signInCredentials);
  }
  signUp(signUpCredentials: SignUpCredentials) {
    return this.http.post(endpoint.concat('/users/signUp'), signUpCredentials);
  }

  validateUsername(username: string) {
    return this.http.get(endpoint.concat(`/users/usernameValid/${username}`));
  }
}
