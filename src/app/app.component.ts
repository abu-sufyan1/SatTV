import { Component, OnInit } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { TVService } from './models/tvservice.data';
import { UserData } from './models/user.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'SatTV';

  user: UserData = {
    userName: 'Sufyan',
    email: 'absufyn@gmail.com'
  }

  initialAccountBalance: number = 100;

  baseServicePack: TVService[] = [
    {
      serviceId: 1,
      serviceName: 'DoorDarshan',
      serviceCharge: 5,
      subscribed: false
    },
    {
      serviceId: 2,
      serviceName: 'ETV Marathi',
      serviceCharge: 5,
      subscribed: false
    },
  ];

  specialServicePack: TVService[] = [
    {
      serviceId: 3,
      serviceName: 'English Learning',
      serviceCharge: 50,
      subscribed: false
    },
    {
      serviceId: 4,
      serviceName: 'German Learning',
      serviceCharge: 70,
      subscribed: false
    }
  ];

  channels: TVService[] = [
    {
      serviceId: 5,
      serviceName: 'Zee TV',
      serviceCharge: 15,
      subscribed: false
    },
    {
      serviceId: 6,
      serviceName: 'Star Plus',
      serviceCharge: 15,
      subscribed: false
    },
    {
      serviceId: 7,
      serviceName: 'Ten Sports',
      serviceCharge: 15,
      subscribed: false
    },
    {
      serviceId: 8,
      serviceName: 'Zee Cinema',
      serviceCharge: 15,
      subscribed: false
    },
    {
      serviceId: 9,
      serviceName: 'Star Sports',
      serviceCharge: 15,
      subscribed: false
    }
  ]

  constructor(private userData: UserDataService) {
    if (localStorage.getItem('accountBalance') === null) {
      this.userData.setAccountBalance(this.initialAccountBalance);
    }
    if (localStorage.getItem('channels') === null) {
      this.userData.setChannels(this.channels);
    }
    if (localStorage.getItem('basePack') === null) {
      this.userData.setBasePack(this.baseServicePack);
    }
    if (localStorage.getItem('specialPack') === null) {
      this.userData.setSpecialPack(this.specialServicePack);
    }
    if (localStorage.getItem('userdata') === null) {
      this.userData.setUserData(this.user);
    }
  }
}
