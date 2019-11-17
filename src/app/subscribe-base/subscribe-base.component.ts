import { Component, OnInit } from '@angular/core';
import { TVService } from '../models/tvservice.data';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-subscribe-base',
  templateUrl: './subscribe-base.component.html',
  styleUrls: ['./subscribe-base.component.scss']
})
export class SubscribeBaseComponent implements OnInit {

  baseServicePack: TVService[] = [];

  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.userData.baseServicePackSubject.subscribe(
      (baseServicePack: TVService[]) => this.baseServicePack = baseServicePack
    )
  }

  subscribe(index: number) {
    this.baseServicePack[index].subscribed = true;
    this.userData.setBasePack(this.baseServicePack);
    this.userData.setAccountBalance(this.userData.accountBalanceSubject.value - this.baseServicePack[index].serviceCharge)
  }

}
