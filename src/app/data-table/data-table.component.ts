import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../models/customers';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  Customers: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getConfig();
  }
  getConfig() {
    return this.http.get<Customers>('https://5a5a9e00bc6e340012a03796.mockapi.io/clients').subscribe((data: Customers) => {
      console.log(data);
      this.Customers = data;
    });
  }

}
