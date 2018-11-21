import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './home/home.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare let endpoint: any;

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'x-access-token': localStorage.getItem(
        'token'
      )
    });
  }

  createQuestion(text: string) {
    const obj = { text };
    return this.http.post(endpoint.concat('/questions/createQuestion'), obj, { headers: this.headers });
  }
  getQuestions() {
    return this.http.get(endpoint.concat('/questions/'), { headers: this.headers });
  }
}
