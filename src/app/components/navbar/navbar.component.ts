import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet  } from '@angular/router';
import { LoginComponent } from '../Auth/login/login.component';
import { SignUpComponent } from '../Auth/sign-up/sign-up.component';
import { AboutComponent } from '../about/about.component';
import { CareComponent } from '../customerServices/care/care.component';
import { ContactComponent } from '../customerServices/contact/contact.component';
import { FeedbackComponent } from '../customerServices/feedback/feedback.component';
import { HomeComponent } from '../home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '../../services/tokenServices/token.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,LoginComponent,SignUpComponent,AboutComponent,CareComponent,ContactComponent,FeedbackComponent,RouterLinkActive,RouterOutlet,HomeComponent,HttpClientModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userRole: string | null = null;

  constructor(private tokenService: TokenService,private router:Router) { 
    this.userRole='';
  }
  

  ngOnInit(): void {
    this.setUserRole();
  }

  setUserRole(): void {
    this.userRole = this.tokenService.getUserRole();
  }
  logout(): void {
    // Clear user role from localStorage
    this.tokenService.clearUserRole();
    // Redirect to the login page
    this.router.navigate(['/login']);
  }

}
