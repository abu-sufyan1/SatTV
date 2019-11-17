import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { TVService } from '../models/tvservice.data';

@Component({
  selector: 'app-view-channels',
  templateUrl: './view-channels.component.html',
  styleUrls: ['./view-channels.component.scss']
})
export class ViewChannelsComponent implements OnInit {

  baseServicePack: TVService[] = [];
  specialServicePack: TVService[] = [];
  channels: TVService[] = [];

  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.userData.baseServicePackSubject.subscribe(
      (baseServicePack: TVService[]) => this.baseServicePack = baseServicePack
    )
    this.userData.specialServicePackSubject.subscribe(
      (specialServicePack: TVService[]) => this.specialServicePack = specialServicePack
    )
    this.userData.channelsSubject.subscribe(
      (channels: TVService[]) => this.channels = channels
    )
  }
}
