import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  accObj: CreateAcc = new CreateAcc();

  constructor(private http:HttpClient) {
   
  }

  onSubmit() {
    debugger
    this.http.post<any>('https://localhost:7047/api/MyDCBank/createaccount', this.accObj)
    .subscribe((res: any) => {
      debugger
      if(res){
        console.log('Account created successfully:', res);
        alert("Account created successfully!!")

      }
      else{
        console.error('Account creation failed!!!', res);
        alert("Please Enter valid CustomerID")
        
      }
      // Handle response here, such as displaying success message or navigating to another page
      
    });
  }


}
export class CreateAcc {
  accountType: number;
  customerID: number;

  constructor() {
    this.accountType =0;
    this.customerID = 0;
  }
}
