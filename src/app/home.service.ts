import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './home/home.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare let endpoint: any;

export const headers = new HttpHeaders({
  'x-access-token': localStorage.getItem(
    'token'
  )
});
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  createQuestion(text: string) {
    const obj = { text };
    return this.http.post(endpoint.concat('/questions/createQuestion'), obj, { headers: headers });
  }
  getQuestions() {
    return this.http.get(endpoint.concat('/questions/'), { headers: headers });
  }
}
