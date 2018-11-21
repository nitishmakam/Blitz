import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


declare let endpoint: any;

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'x-access-token': localStorage.getItem('token')
    });
  }

  createAnswer(text: String, qid: String) {
    const obj = { qid, text };
    return this.http.post(endpoint.concat('/questions/createAnswer'), obj, { headers: this.headers });
  }
}
