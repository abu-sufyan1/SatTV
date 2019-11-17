import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TVService } from '../models/tvservice.data';
import { UserData } from '../models/user.data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userDataSubject: BehaviorSubject<UserData> = new BehaviorSubject<UserData>(null);
  accountBalanceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  baseServicePackSubject: BehaviorSubject<TVService[]> = new BehaviorSubject<TVService[]>(null);
  specialServicePackSubject: BehaviorSubject<TVService[]> = new BehaviorSubject<TVService[]>(null);

  channelsSubject: BehaviorSubject<TVService[]> = new BehaviorSubject<TVService[]>(null);

  constructor() {
    if (localStorage.getItem('accountBalance') != null) {
      this.accountBalanceSubject.next(+localStorage.getItem('accountBalance'));
    }
    if (localStorage.getItem('channels') != null) {
      this.channelsSubject.next(JSON.parse(localStorage.getItem('channels')));
    }
    if (localStorage.getItem('basePack') != null) {
      this.baseServicePackSubject.next(JSON.parse(localStorage.getItem('basePack')));
    }
    if (localStorage.getItem('specialPack') != null) {
      this.specialServicePackSubject.next(JSON.parse(localStorage.getItem('specialPack')));
    }
    if (localStorage.getItem('userdata') != null) {
      this.userDataSubject.next(JSON.parse(localStorage.getItem('userdata')));
    }
  }

  setAccountBalance(accountBalance: number) {
    this.accountBalanceSubject.next(accountBalance);
    localStorage.setItem("accountBalance", accountBalance.toString())
  }

  setChannels(channels: TVService[]) {
    this.channelsSubject.next(channels);
    localStorage.setItem("channels", JSON.stringify(channels))
  }

  setBasePack(basePack: TVService[]) {
    this.baseServicePackSubject.next(basePack);
    localStorage.setItem('basePack', JSON.stringify(basePack));
  }

  setSpecialPack(specialPack: TVService[]) {
    this.specialServicePackSubject.next(specialPack);
    localStorage.setItem('specialPack', JSON.stringify(specialPack));
  }

  setUserData(userData: UserData) {
    this.userDataSubject.next(userData);
    localStorage.setItem('userdata', JSON.stringify(userData))
  }
}
