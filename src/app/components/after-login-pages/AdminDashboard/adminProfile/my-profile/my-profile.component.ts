import { Component } from '@angular/core';
import { CustomerViewModel } from '../../../../../Models/CustomerViewModel';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent {
  user: CustomerViewModel | undefined;
  errorMessage: string = '';
  profileImage: string | null = localStorage.getItem('profileImage');

  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
    // Retrieve customerID from local storage
    const customerIDString = localStorage.getItem('customerID');
    debugger;

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
    this.http.get<CustomerViewModel>(`https://localhost:7047/api/RepositoryServices/Customers?CustomerID=${customerID}`).subscribe(
      (user: CustomerViewModel) => {
        this.user = user;
      },
      (error) => {
        this.errorMessage = 'Failed to fetch user details';
        console.error('Failed to fetch user details:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
        
      };
    }
  }

  onChangeProfile(): void {
    // Implement functionality to change profile picture here
    if (this.profileImage) {
      // Update the profile image
      localStorage.setItem('profileImage', this.profileImage);
      // You can also send the new profile image to the server if needed
    }
  }

   onDeleteProfile(): void {
    localStorage.removeItem('profileImage');
    this.profileImage = null;
    // Implement functionality to delete profile picture here
  }
}
