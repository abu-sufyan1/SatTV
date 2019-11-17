import { Component, OnInit } from '@angular/core';
import { TVService } from '../models/tvservice.data';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss']
})
export class AddChannelComponent implements OnInit {

  channels: TVService[] = [];

  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.userData.channelsSubject.subscribe(
      (channels: TVService[]) => this.channels = channels
    )
  }

  subscribe(index: number) {
    this.channels[index].subscribed = true;
    this.userData.setChannels(this.channels);
    this.userData.setAccountBalance(this.userData.accountBalanceSubject.value - this.channels[index].serviceCharge)
  }

}
