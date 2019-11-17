import { Component, OnInit } from '@angular/core';
import { TVService } from '../models/tv.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-subscribe-special',
  templateUrl: './subscribe-special.component.html',
  styleUrls: ['./subscribe-special.component.scss']
})
export class SubscribeSpecialComponent implements OnInit {

  specialService: TVService[] = [];

  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.userData.specialServicePackSubject.subscribe(
      (specialService: TVService[]) => this.specialService = specialService
    )
  }

  subscribe(index: number) {
    this.specialService[index].subscribed = true;
    this.userData.setSpecialPack(this.specialService);
    this.userData.setAccountBalance(this.userData.accountBalanceSubject.value - this.specialService[index].serviceCharge)
  }

}
