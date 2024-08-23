import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(uname: string, pword: string) {
    if (uname === 'akram' && pword === '1234') {
      // return 200;
      this.isAuthenticated = true;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('isAuthenticated', 'true');
      } 
      
      return true;
    } else {
      // return 403;
      return false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('isAuthenticated');
    } 
    this.router.navigate(['login']);
  }

  checkAuthentication(): boolean {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('isAuthenticated') === 'true';
    }
     return false;
  }
}