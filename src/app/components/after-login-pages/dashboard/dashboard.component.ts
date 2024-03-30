import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { FormsModule } from '@angular/forms';
import { session } from '../../../utilities/services/session.service';
import {  RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/authservices/auth.service';
import { TokenService } from '../../../services/tokenServices/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  URL: any;
 
  constructor(private authService:AuthService,private tokenService:TokenService, private router:Router) {
   
  }
  
  
  logout(): void {
    this.authService.logout();
     // Reload the current page
     window.location.reload();
    this.tokenService.clearUserRole();
  }
  navigateToMyProfile(): void {
    // Navigate to the My Profile component
    this.router.navigateByUrl('/dashboard/myProfile1');
  } 

    

  
}


