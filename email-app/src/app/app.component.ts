import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mails;
  sent = false;

  constructor(private http: ApiService) { }

  ngOnInit() {
    this.getMails();
  }

  getMails() {
    this.sent = false;
    this.http.getMails().subscribe(res => {
      this.mails = res.json();
    });
  }

  getSent() {
    this.sent = true;
    this.http.getSent().subscribe(res => {
      this.mails = res.json();
    });
  }

  change(e) {

    const id = isNumber(parseInt(e.target.value, 10)) ? e.target.value : '';
    console.log(id);
    if (this.sent === false) {
      this.http.getMails(id).subscribe(res => {
        const result = id ? [res.json()] : res.json();
        this.mails = result;
      });
    } else {
      this.http.getSent(id).subscribe(res => {
        const result = id ? [res.json()] : res.json();
        this.mails = result;
      });
    }
  }
}
