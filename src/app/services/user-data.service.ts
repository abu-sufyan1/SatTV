import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  accountBalance: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  constructor() {
    if (localStorage.getItem('accountBalance') != null) {
      this.accountBalance.next(+localStorage.getItem('accountBalance'));
    }
  }

  setAccountBalance(accountBalance: number) {
    this.accountBalance.next(accountBalance);
    localStorage.setItem("accountBalance", accountBalance.toString())
  }
}
