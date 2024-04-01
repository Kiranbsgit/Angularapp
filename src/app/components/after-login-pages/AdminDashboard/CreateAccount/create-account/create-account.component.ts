import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FindUser } from '../../../../../Models/FindUserViewModle';


@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  accObj: CreateAcc = new CreateAcc();
  findUser: FindUser = new FindUser(); 
  fetchedCustomerId: number | undefined; 

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
// this is to fetch the customerId of the user by providing the username

fetchCustomerId() {
  if (!this.findUser.userName) {
    alert("Please enter a username.");
    return;
  }
  
  this.http.get<any>(`https://localhost:7047/api/RepositoryServices/FindUser?userName=${this.findUser.userName}`)
    .subscribe((res: any) => {
      if (res && res.customerID) {
        this.fetchedCustomerId = res.customerID;
        alert("CustomerID fetched successfully!");
      } else {
        console.error('Customer not found or no CustomerID returned:', res);
        alert("Customer not found or no CustomerID returned.");
      }
    }, error => {
      console.error('Error fetching CustomerID:', error);
      alert("An error occurred while fetching CustomerID.");
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
