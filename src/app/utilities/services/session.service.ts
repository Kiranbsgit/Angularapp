import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class session {
  private loggedIn = false;

  constructor() {}

  // Method to check if the user is logged ins
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Method to start a new session (login)
  login(): void {
    // Perform authentication logic here
    // For example, set a token in local storage
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedIn = true;
  }

  // Method to end the session (logout)
  logout(): void {
    // Perform logout logic here
    // For example, clear the token from local storage
    localStorage.removeItem('isLoggedIn');
    this.loggedIn = false;
  }

  // Method to check if a session exists (user is logged in)
  checkSession(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      this.loggedIn = true;
    }
  }
}
