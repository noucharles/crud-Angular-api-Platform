import { User } from './model/User';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = 'https://127.0.0.1:8000/api/users?page=1';
    return this.httpClient.get<User[]>(url);
  }

  getUserById(id: number) {
    const url = `https://127.0.0.1:8000/api/users/`;
    return this.httpClient.get<User>(url + `${id}`);
  }

  addUser(user: User) {
    const url = 'https://127.0.0.1:8000/api/users';
    return this.httpClient.post(url, user);
  }

  deleteUser(id: number) {
    const url = `https://127.0.0.1:8000/api/users/`;
    return this.httpClient.delete(url + `${id}`);
  }

  updateUser(user: User, id: number) {
    const url = `https://127.0.0.1:8000/api/users/${id}`;
    console.log(user);
    return this.httpClient.put(url, user);
  }
}


