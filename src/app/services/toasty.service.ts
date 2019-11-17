import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastyService {

  toastySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toastyClass: string;
  message: string;

  constructor() { }

  showToasty(message: string, toastyClass: string) {
    this.toastySubject.next(true)
    this.message = message;
    this.toastyClass = toastyClass;
  }

  hideToasty() {
    this.toastySubject.next(false);
  }

}
