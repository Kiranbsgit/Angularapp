import { Component } from '@angular/core';
import { AuthService } from '../../../../services/authservices/auth.service';
import { TokenService } from '../../../../services/tokenServices/token.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  constructor(private authService:AuthService,private tokenService:TokenService) {}
  
  logout(): void {
    this.authService.logout();
    this.tokenService.clearUserRole();
  }
}
