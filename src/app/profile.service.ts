import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare let endpoint: any;
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'x-access-token': localStorage.getItem('token')
    });
  }

  getQuestions() {
    return this.http.get(endpoint.concat(`/questions/questionsBy/${localStorage.getItem('username')}`), { headers: this.headers });
  }
  getAnswers() {
    return this.http.get(endpoint.concat(`/questions/answersBy/${localStorage.getItem('username')}`), { headers: this.headers });
  }
}
