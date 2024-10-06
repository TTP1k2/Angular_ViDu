import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class User {
  _id: string;
  name: string;
  age: number;
  colour: string;

  constructor(name: string = '', age: number = 0, colour: string = '', _id?: string) {
    this.name = name;
    this.age = age;
    this.colour = colour;
    this._id = _id ?? '';
  }
}

@Injectable({
  providedIn: 'root'
})
export class Vd22UnittestService {
  private apiLink = 'https://crudcrud.com/api/your-api-link/unicorns';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiLink);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiLink}/${id}`);
  }

  createUser(name: string, age: number, colour: string): Observable<User> {
    return this.http.post<User>(this.apiLink, { name, age, colour });
  }

  updateUser(id: string, name: string, age: number, colour: string): Observable<User> {
    return this.http.put<User>(`${this.apiLink}/${id}`, { name, age, colour });
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiLink}/${id}`);
  }
}
