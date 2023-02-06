import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private http: HttpClient) { }

  getUsers(token: string){
    return this.http.get('http://localhost:3000/users', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
}
