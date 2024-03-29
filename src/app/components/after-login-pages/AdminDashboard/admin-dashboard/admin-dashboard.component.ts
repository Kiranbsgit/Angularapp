import { Component } from '@angular/core';
import { AuthService } from '../../../../services/authservices/auth.service';
import { TokenService } from '../../../../services/tokenServices/token.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CreateAccountComponent } from "../CreateAccount/create-account/create-account.component";
import { MyProfileComponent } from '../adminProfile/my-profile/my-profile.component';


@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css',
    imports: [RouterLink, RouterLinkActive, RouterOutlet, CreateAccountComponent,MyProfileComponent ]
})
export class AdminDashboardComponent {
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
    this.router.navigateByUrl('/adminDashboard/myProfile');
  } 

    
  
}
