import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare let endpoint: any;

const headers = new HttpHeaders({
  'x-access-token': localStorage.getItem(
    'token'
  )
});
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {  }

  createQuestion(text: string) {
    const obj = { text, username: localStorage.getItem('username') };
    console.log(localStorage.getItem('token'));
    return this.http.post(endpoint.concat('/questions/createQuestion'), obj, { headers: headers });
  }
}
