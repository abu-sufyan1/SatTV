import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  accountBalance: number;
  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.userData.accountBalance.subscribe(
      (balance: number) => {
        this.accountBalance = balance;
      }
    )
  }

}
