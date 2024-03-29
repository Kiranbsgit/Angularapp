export class CustomerViewModel {
    userName: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phoneNumber: string;
    address: string;
  
    constructor(
      userName: string,
      firstName: string,
      lastName: string,
      dateOfBirth: Date,
      email: string,
      phoneNumber: string,
      address: string
    ) {
      this.userName = userName;
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.address = address;
    }
  }
  