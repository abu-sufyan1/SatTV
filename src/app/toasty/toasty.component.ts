import { Component, OnInit, Input } from '@angular/core';
import { ToastyService } from '../services/toasty.service';

@Component({
  selector: 'app-toasty',
  templateUrl: './toasty.component.html',
  styleUrls: ['./toasty.component.scss']
})
export class ToastyComponent implements OnInit {

  private _toasty: boolean;
  public get toasty(): boolean {
    return this._toasty;
  }

  constructor(private toastyService: ToastyService) { }

  ngOnInit() {
    this.toastyService.toastySubject.subscribe(
      (toasty: boolean) => {
        this._toasty = toasty;
      }
    );
  }
  closeToasty() {
    this.toastyService.hideToasty();
  }



}
