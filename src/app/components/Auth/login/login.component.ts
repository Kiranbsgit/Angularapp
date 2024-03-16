import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenService } from '../../../services/tokenServices/token.service';
import { AuthService } from '../../../services/authservices/auth.service';
import { Observable, delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AppComponent,FormsModule,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // message: string;
  loginObj:Login;
  errorMessage: string;
  
  // static onLogin: boolean;
  // public loginForm!: FormGroup;
  
  
  constructor(private router:Router,private tokenService:TokenService,private http:HttpClient){
    this.loginObj= new Login();
    this.errorMessage = '';
   
    // this.message = this.getMessage();
  }
  // ngOnInit(): void {
  //   // Check if the user is already logged in
  //   debugger;
  //   if (!this.tokenService.getAccessToken()) {
  //     this.router.navigate(['/dashboard']);
  //   }
  // }
 
  // getMessage() {
  //   return 'Logged ' + (this.loginObj.isLoggedIn ? 'in' : 'out');
  // }
  onLogin(){
    // this.message = 'Trying to log in ...';
  
    // if (this.loginForm.valid) {
    //   console.log(this.loginForm.value);
      
   
    this.http.post<any>('https://localhost:7047/api/mydcbank/user/login',this.loginObj).pipe(
      delay(100)).subscribe((res:any)=>{
       if(res  && res.token.accessToken){
        console.log('Login Successful. Access token:', res.token.accessToken);
       //set token 
        this.tokenService.setTokens({ accessToken: res.token.accessToken, refreshToken: res.token.refreshToken });
        // Set the user role
        this.tokenService.setUserRole(res.role);

        
        alert("Login Successfull");
        //navigate url
        //----------------------------------------------------------
        // const redirectUrl = '/dashboard'; 
        // const navigationExtras: NavigationExtras = {
        //   queryParamsHandling: 'preserve',
        //   preserveFragment: true
        // };
        // this.router.navigate([redirectUrl], navigationExtras); getAccessToken
        //---------------------------------------------------------
        // if(this.authService.isAuthenticated()){
          
        // this.router.navigate(['/dashboard']);
        // Redirect the user to the appropriate dashboard based on their role
        const userRole = res.role;
        if (userRole === 'admin') {
          this.router.navigate(['/adminDashboard']);
          alert("Logged in as Admin!!")
        } 
        else if(userRole=='user') {
          this.router.navigate(['/dashboard']);

        }

       
      }
      else{
           console.error('Login failed:', res);
           alert("Username or password is wrong!. Please try again")
           this.errorMessage = 'Authentication failed: No token received from the server.';
          
        }

     
      
    });

  }
}
  
  


export class Login{

  UserName:string;
  Password:string;
  
  

  constructor(){
    this.Password='';
    this.UserName='';
  }
 
}