import { Component, OnInit } from '@angular/core';
import { AccountViewModel } from '../../../../Models/AccountsViewModel';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
  
})
export class AccountsComponent implements OnInit {
  accounts: AccountViewModel[] = [];
  selectedAccount: AccountViewModel | undefined;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve customerID from local storage
    const customerIDString = localStorage.getItem('customerID');
  
    if (customerIDString) {
      // Convert customerIDString to a number
      const customerID = parseInt(customerIDString, 10);
  
      if (customerID) {
        // Fetch user details based on customerID
        this.fetchUserDetails(customerID);
      } else {
        this.errorMessage = 'CustomerID not found';
      }
    }
  }

  fetchUserDetails(customerID: number): void {
    // Make HTTP request to fetch user details from API
    this.http.get<AccountViewModel[]>(`${environment.apiUrl}api/RepositoryServices/Account?CustomerID=${customerID}`).subscribe(
      (data: AccountViewModel[]) => {
        // Sort the accounts by accountID
        this.accounts = data.sort((a, b) => a.accountID - b.accountID);
  
        if (this.accounts.length > 0) {
          // Select the first account by default
          this.selectedAccount = this.accounts[0];
        }
      },
      (error) => {
        this.errorMessage = 'Failed to fetch user details';
        console.error('Failed to fetch user details:', error);
      }
    );
  }

  onSelectChange(event: any): void {
    const selectedAccountID = parseInt(event.target.value, 10);
  // Find the selected account
  this.selectedAccount = this.accounts.find(account => account.accountID === selectedAccountID);
  }
}