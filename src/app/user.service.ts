import { HttpClient } from '@angular/common/http';
import { SignUpCredentials } from './root/root.component';
import { SignInCredentials } from './root/root.component';
import { Injectable } from '@angular/core';

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
  upload(fd: FormData, username: string) {
    this.http.post(endpoint.concat(`/users/img/${username}`), fd).subscribe();
  }
}
