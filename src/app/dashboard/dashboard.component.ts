import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  urlAndBanner: URLandBanner[] = [
    {
      url: '/balance',
      banner: 'View current balance in the account'
    },
    {
      url: '/recharge',
      banner: 'Recharge Account'
    },
    {
      url: '/view-channels',
      banner: 'View available packs, channels and services'
    },
    {
      url: '/base-subscription',
      banner: 'Subscribe to base packs'
    },
    {
      url: '/add-channel',
      banner: 'Add channels to an existing subscription'
    },
    {
      url: '/special-subscription',
      banner: 'Subscribe to special services'
    },
    {
      url: 'subscription-detail',
      banner: 'View current subscription details'
    },
    {
      url: '/user-detail',
      banner: 'Update email and phone number for notifications'
    }
  ]

  ngOnInit() {
  }

}

interface URLandBanner {
  url: string,
  banner: string;
}
