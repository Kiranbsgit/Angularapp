export class AccountViewModel {
    accountID: number;
    accountName: string;
    accountNumber: string;
    accountType: string;
  
    constructor(accountID: number, accountName: string, accountNumber: string, accountType: string) {
      this.accountID = accountID;
      this.accountName = accountName;
      this.accountNumber = accountNumber;
      this.accountType = accountType;
    }
  }