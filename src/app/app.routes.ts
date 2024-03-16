import { Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { SignUpComponent } from './components/Auth/sign-up/sign-up.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CareComponent } from './components/customerServices/care/care.component';
import { ContactComponent } from './components/customerServices/contact/contact.component';
import { FeedbackComponent } from './components/customerServices/feedback/feedback.component';
import { DashboardComponent } from './components/after-login-pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/authservices/auth.service';
import {  authGuard } from './gaurds/auth.guard'; 
import { adminAuthGaurd } from './gaurds/admin-auth.guard';
import { routes as afterLoginRoutes } from './components/after-login-pages/after-login-pages.module';



export const routes: Routes = [

    {
        path:'login', title:"Login",
        component:LoginComponent
    },
    {
        path:'signUp',title:"SignUp",
        component:SignUpComponent
    },
    {
        path:'about',title:"About",
        component:AboutComponent ,    // this is gaurded only for testimg purpose   canActivate: [authGuard]    
    },
    {
        path:'',title:"Home",
        component:HomeComponent
    },
    {
        path:'customerServices/care',title:"Customer Care",
        component:CareComponent
    },
    {
        path:'customerServices/contact',title:"Contact Us",
        component:ContactComponent
    },
    {
        path:'customerServices/feedback',title:"Feedback",
        component:FeedbackComponent
    },
  
    
    ...afterLoginRoutes,
];
export const allRoutes: Routes = [...routes, ...afterLoginRoutes];

