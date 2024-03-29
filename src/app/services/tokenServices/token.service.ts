import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  private readonly tokenKey = 'accessToken';
  private readonly refreshTokenKey = 'refreshToken';
  private readonly roleKey = 'userRole';
  private readonly customerIDKey ='customerID';

  constructor() { }

  setTokens(tokens: { accessToken: string, refreshToken: string }): void {
    localStorage.setItem(this.tokenKey, tokens.accessToken);
    localStorage.setItem(this.refreshTokenKey, tokens.refreshToken);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  clearTokens(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  // Roles of an user .
  setUserRole(role: string): void {
    localStorage.setItem(this.roleKey, role);
  }

  getUserRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  clearUserRole(): void {
    localStorage.removeItem(this.roleKey);
  }
  // To fetch the CustomerId of an user
  // setCustomerID(CustomerId:number):void{
  //   localStorage.setItem(this.customerIDkey,)
  // }
  setCustomerID(customerID: number): void {
    localStorage.setItem(this.customerIDKey, customerID.toString());
  }

  getCustomerID(): number | null {
    const customerID = localStorage.getItem(this.customerIDKey);
    return customerID ? parseInt(customerID, 10) : null;
  }

  clearCustomerID(): void {
    localStorage.removeItem(this.customerIDKey);
  }

}
