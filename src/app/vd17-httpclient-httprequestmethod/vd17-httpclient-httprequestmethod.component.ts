import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface User {
  _id: string;
  name: string;
  age: number;
}

@Component({
  selector: 'app-vd17-httpclient-httprequestmethod',
  templateUrl: './vd17-httpclient-httprequestmethod.component.html',
  styleUrl: './vd17-httpclient-httprequestmethod.component.css'
})
export class Vd17HttpclientHttprequestmethodComponent implements OnInit {
  apiLink = 'https://crudcrud.com/api/YOUR_UNIQUE_API_KEY/unicorns';
  listUser: any[] = [];
  selectedUser: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http.get<any[]>(this.apiLink).subscribe((res) => {
      this.listUser = res;
    });
  }

  createUser(name: string, age: number) {
    this.http.post(this.apiLink, { name, age }).subscribe(() => {
      this.getUser();
    });
  }

  updateUser(id: string, name: string, age: number) {
    this.http.put(`${this.apiLink}/${id}`, { name, age }).subscribe(() => {
      this.getUser();
      this.selectedUser = {};
    });
  }

  deleteUser(id: string) {
    this.http.delete(`${this.apiLink}/${id}`).subscribe(() => {
      this.getUser();
    });
  }
}
