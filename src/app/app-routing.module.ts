import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechargeComponent } from './recharge/recharge.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { BalanceComponent } from './balance/balance.component';
import { SubscribeBaseComponent } from './subscribe-base/subscribe-base.component';
import { SubscribeSpecialComponent } from './subscribe-special/subscribe-special.component';
import { SubscribtionDetailComponent } from './subscribtion-detail/subscribtion-detail.component';
import { UserDetailUpdateComponent } from './user-detail-update/user-detail-update.component';
import { ViewChannelsComponent } from './view-channels/view-channels.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'recharge',
    component: RechargeComponent
  },
  {
    path: 'add-channel',
    component: AddChannelComponent
  },
  {
    path: 'balance',
    component: BalanceComponent
  },
  {
    path: 'base-subscription',
    component: SubscribeBaseComponent
  },
  {
    path: 'special-subscription',
    component: SubscribeSpecialComponent
  },
  {
    path: 'subscription-detail',
    component: SubscribtionDetailComponent
  },
  {
    path: 'user-detail',
    component: UserDetailUpdateComponent
  },
  {
    path: 'view-channels',
    component: ViewChannelsComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
