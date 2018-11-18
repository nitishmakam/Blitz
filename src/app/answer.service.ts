import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { headers } from './home.service';

declare let endpoint: any;

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  createAnswer(text: String, qid: String) {
    const obj = { qid, text };
    return this.http.post(endpoint.concat('/questions/createAnswer'), obj, { headers: headers });
  }
}
