import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SatTV';
  initialAccountBalance: number = 100;

  constructor(private userData: UserDataService) {
    this.userData.setAccountBalance(this.initialAccountBalance);
  }
}
