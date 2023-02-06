import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(user: string, pass: string){
    return this.http.post('http://localhost:3000/auth', {
      user, password: pass
    })
  }
}
