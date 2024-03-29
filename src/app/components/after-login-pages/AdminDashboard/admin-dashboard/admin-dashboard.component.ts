import { Component } from '@angular/core';
import { AuthService } from '../../../../services/authservices/auth.service';
import { TokenService } from '../../../../services/tokenServices/token.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
 
  constructor(private authService:AuthService,private tokenService:TokenService,) {
   
  }
  
  
  logout(): void {
    this.authService.logout();
     // Reload the current page
     window.location.reload();
    this.tokenService.clearUserRole();
  }

    
  
}
