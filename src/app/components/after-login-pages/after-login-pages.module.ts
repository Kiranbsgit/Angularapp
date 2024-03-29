import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../../gaurds/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../Auth/login/login.component';
import { AuthService } from '../../services/authservices/auth.service';
import { AdminDashboardComponent } from './AdminDashboard/admin-dashboard/admin-dashboard.component';
import { adminAuthGaurd } from '../../gaurds/admin-auth.guard';
import { CreateAccountComponent } from './AdminDashboard/CreateAccount/create-account/create-account.component';
import { MyProfileComponent } from './AdminDashboard/adminProfile/my-profile/my-profile.component';




 export const routes: Routes = [
   { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, title:'Dashboard',canActivate: [authGuard], data: {requiredRole: 'user'}}, // Apply the canActivate property ( canActivate: [authGuard] )
  {path:'adminDashboard', component:AdminDashboardComponent, title:'Admin - Dashboard',canActivate:[authGuard], data: {requiredRole: 'admin'}, 
    children:[
      { path: '', redirectTo: 'myProfile', pathMatch: 'full' }, 
      {path:'createAccount',component:CreateAccountComponent,title:'Create Account', canActivate:[authGuard],data: {requiredRole: 'admin'}},
      {path:'myProfile',component:MyProfileComponent,title:'My Profile',canActivate:[authGuard],data: {requiredRole: 'admin'}},
      
    ]
  },
  //  {path:'createAccount',component:CreateAccountComponent,title:'Create Account', canActivate:[authGuard],data: {requiredRole: 'admin'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule,RouterOutlet],
  exports: [RouterModule],
  declarations: [
    
  ],
  
  providers: [AuthService] // Ensure AuthService is provided he]

})
export class AfterLoginPagesModule {
   
    
}
export class DashboardModule { }
