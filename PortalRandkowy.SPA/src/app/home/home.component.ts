import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  values: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getValues() {
    this.httpClient.get('http://localhost:5000/api/values')
      .subscribe(response => {
        this.values = response;
        console.log(this.values);
      }, error => {
        console.log(error);
      });
  }

}
