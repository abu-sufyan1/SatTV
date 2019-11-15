import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BalanceComponent } from './balance/balance.component';
import { RechargeComponent } from './recharge/recharge.component';
import { ViewChannelsComponent } from './view-channels/view-channels.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { SubscribeBaseComponent } from './subscribe-base/subscribe-base.component';
import { SubscribeSpecialComponent } from './subscribe-special/subscribe-special.component';
import { SubscribtionDetailComponent } from './subscribtion-detail/subscribtion-detail.component';
import { UserDetailUpdateComponent } from './user-detail-update/user-detail-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Data } from './constants/data.constants/data.constants.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BalanceComponent,
    RechargeComponent,
    ViewChannelsComponent,
    AddChannelComponent,
    SubscribeBaseComponent,
    SubscribeSpecialComponent,
    SubscribtionDetailComponent,
    UserDetailUpdateComponent,
    DashboardComponent,
    Data.ConstantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
