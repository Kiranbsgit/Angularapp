import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerViewModel } from '../../Models/CustomerViewModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://localhost:7047/api/RepositoryServices/Customers'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  getUserDetails(customerID: number): Observable<CustomerViewModel> {
    return this.http.get<CustomerViewModel>(`${this.baseUrl}/users/${customerID}`);
  }
}


