import { Component } from '@angular/core';
import { AuthService } from '../../../services/authservices/auth.service';
import { AppComponent } from '../../../app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [AppComponent,HttpClientModule,FormsModule,CommonModule,],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
 export class SignUpComponent {
  signUpObj:SignUp
  successMessage = ''; // Success message
  errorMessage = ''; // Error message
  formSubmitted = false; // Flag to track form submission
  passwordsMismatch = false; // Flag to track password mismatch
 

  
  constructor(private http:HttpClient,private router:Router) {
    this.signUpObj=new SignUp();
  }
  convertDate(event: any): void {
    const selectedDate = event.target.value;
    this.signUpObj.dateOfBirth = selectedDate;
  }
  passwordsMatch(): boolean {
    return this.signUpObj.password === this.signUpObj.confirmPassword;
  }

  onSubmit(): void {
    debugger;
    this.formSubmitted = true; // Set form submission flag
    if (!this.passwordsMatch()) {
      // Passwords do not match, show error message
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    if (this.validateForm()){
    this.http.post('https://localhost:7047/api/mydcbank/user/register',this.signUpObj).subscribe(
      (res:any)=>{
        console.log('Signup successful:', res);
        alert("SignUp Successfull");
        this.successMessage = 'Signup successful!';
        this.errorMessage = 'Please try again';
        this.errorMessage = 'Please fix the errors in the form.';
        this.router.navigate(['/login']); // Navigate to sign-in page
        return;

      }); // Optionally, reset form or navigate to another page
    }
    else {
      // Form is invalid, display error message or take appropriate action
      this.errorMessage = 'Please fill in all required fields correctly.';
      this.successMessage = ''; // Clear any existing success message
    }
    
  
  }

  
    private validateForm(): boolean {
      return (
        !!this.signUpObj.userName &&
        !!this.signUpObj.firstName &&
        !!this.signUpObj.lastName &&
        !!this.signUpObj.email &&
        !!this.signUpObj.password &&
        !!this.signUpObj.confirmPassword &&
        !!this.signUpObj.dateOfBirth &&
        !!this.signUpObj.phoneNumber &&
        !!this.signUpObj.address &&
        !!this.signUpObj.zipCode &&
        !!this.signUpObj.securityQuestion &&
        !!this.signUpObj.securityAnswer &&
        this.signUpObj.password === this.signUpObj.confirmPassword // Check if passwords match
      );
    }
}
  

export class SignUp {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  zipCode: string;
  phoneNumber: string;
  securityQuestion: string;
  securityAnswer: string;


  constructor() {
    this.userName = '';
    this.password = '';
    this.confirmPassword = '';
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.dateOfBirth = '';
    this.address = '';
    this.zipCode = '';
    this.phoneNumber = '';
    this.securityQuestion = '';
    this.securityAnswer = '';
    
  }
}