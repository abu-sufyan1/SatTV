import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { TVService } from '../models/tvservice.data';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-subscribtion-detail',
  templateUrl: './subscribtion-detail.component.html',
  styleUrls: ['./subscribtion-detail.component.scss']
})
export class SubscribtionDetailComponent implements OnInit {

  baseServicePack: TVService[];
  specialServicePack: TVService[];
  channels: TVService[];

  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.userData.baseServicePackSubject.subscribe(
      (baseServicePack: TVService[]) => {
        this.baseServicePack = [];
        this.baseServicePack = baseServicePack;
        this.baseServicePack = this.baseServicePack.filter(x => x.subscribed === true);
      }
    )
    this.userData.specialServicePackSubject.subscribe(
      (specialServicePack: TVService[]) => {
        this.specialServicePack = [];
        this.specialServicePack = specialServicePack;
        this.specialServicePack = this.specialServicePack.filter(x => x.subscribed === true)
      }
    )
    this.userData.channelsSubject.subscribe(
      (channels: TVService[]) => {
        this.channels = [];
        this.channels = channels;
        this.channels = this.channels.filter(x => x.subscribed === true);
      }
    )
  }

}
