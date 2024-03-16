import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  private readonly tokenKey = 'accessToken';
  private readonly refreshTokenKey = 'refreshToken';
  private readonly roleKey = 'userRole';

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
}
