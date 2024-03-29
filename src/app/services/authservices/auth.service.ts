import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// import { TokenService } from '../tokenServices/token.service';


@Injectable({
  providedIn: 'root',
  
})
 
export class AuthService {


   constructor( private router:Router) {}

  

  // signUp(userObj:any): Observable<any> {
  //   return this.http.post<any>('https://localhost:7047/api/mydcbank/user/register',userObj);

  // }
  // Onlogin(loginObj:any){
  //   return this.http.post<any>('https://localhost:7047/api/mydcbank/user/login',loginObj);

  // }
  // login1():Observable<boolean>{
  //   return of(true).pipe(delay(1000),tap(()=>LoginComponent.onLogin=true))
  // }

  // CreateAcc(accObj:any){
  //   return this.http.post<any>('https://localhost:7047/api/MyDCBank/createaccount',accObj)
  // }

 

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  // loginHandle(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(() => this.isLoggedIn = true)
  //   );
  // }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }
  
  // Method to check if user is authenticated (token exists)
  // isAuthenticated(): boolean {
  //   // Check if a token exists in local storage
  //   return !!this.tokenService.getAccessToken();
  // }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken'); // Check directly from local storage
  }

  // Method to clear token from local storage
  // logout(): void {
  //   this.tokenService.clearTokens();
  //   this.router.navigate(['login'])
  // }
  logout(): void {
    localStorage.removeItem('accessToken'); // Remove token from local storage
    localStorage.removeItem('refreshToken'); // Remove refresh token from local storage
    this.router.navigate(['/login']);
  }


  // private loggedIn = false;

  

  // // Method to check if the user is logged ins
  // isLoggedIn(): boolean {
  //   return this.loggedIn;
  // }

  // // Method to start a new session (login)
  // login(): void {
  //   // Perform authentication logic here
  //   // For example, set a token in local storage
  //   localStorage.setItem('accessToken', 'true');
  //   this.loggedIn = true;
  //   //  of(true).pipe(delay(1000),tap(()=>this.loggedIn=true))
  // }

  // // Method to end the session (logout)
  // logout(): void {
  //   // Perform logout logic here
  //   // For example, clear the token from local storage
  //   localStorage.removeItem('accessToken');
  //   this.loggedIn = false;
  // }

  // // Method to check if a session exists (user is logged in)
  // checkSession(): void {
  //   const isLoggedIn = localStorage.getItem('accessToken');
  //   if (isLoggedIn) {
  //     this.loggedIn = true;
  //   }
  // }

  
}
export class DashboardModule {}
