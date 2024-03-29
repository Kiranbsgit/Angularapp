import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { FormsModule } from '@angular/forms';
import { session } from '../../../utilities/services/session.service';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/authservices/auth.service';
import { TokenService } from '../../../services/tokenServices/token.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private authService:AuthService,private tokenService:TokenService) {}
  
  logout(): void {
    this.authService.logout();
    
     // Reload the current page
     window.location.reload();
    this.tokenService.clearUserRole();
  }

  
}


