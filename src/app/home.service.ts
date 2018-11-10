import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let endpoint: any;
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  createQuestion(text: string) {
    const obj = { text, username: localStorage.getItem('username') };
    return this.http.post(endpoint.concat('/questions/createQuestion'), obj);
  }
}
