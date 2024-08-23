import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = "";
  password = "";
  errorMsg = "";  

  constructor(private auth: AuthService, private router: Router) { }

  // ngOnInit(): void {
  //   this.auth.logout(); // Logs out the user when the component initializes
  // }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);
      if (res) {
        this.router.navigate(['home']);
      }
      if (!res) {
        this.errorMsg = "Invalid Credentials";
      }
    }
  }

}