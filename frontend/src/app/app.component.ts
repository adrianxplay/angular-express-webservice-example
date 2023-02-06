import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {LoginService} from './login.service';
import {UsersListService} from "./users-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private userService: UsersListService
  ) {
  }

  onSubmit(): void {

    this.loginService.login('asdasdas','pass').subscribe(response => {
      // @ts-ignore
      const {accessToken, refreshToken} = response

      this.userService.getUsers(accessToken).subscribe(response => {
        console.log(response)
      })

    })
  }
}
