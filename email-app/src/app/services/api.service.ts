import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  getMails(id?: number) {
    const url = id ? 'http://localhost:3000/mails/' + id : 'http://localhost:3000/mails';
    return this.http.get(url);
  }

  getSent(id?: number) {
    const url = id ? 'http://localhost:3000/sent/' + id : 'http://localhost:3000/sent';
    return this.http.get(url);
  }
}
