import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { UserData } from '../models/user.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastyService } from '../services/toasty.service';

@Component({
  selector: 'app-user-detail-update',
  templateUrl: './user-detail-update.component.html',
  styleUrls: ['./user-detail-update.component.scss']
})
export class UserDetailUpdateComponent implements OnInit {

  userForm: FormGroup;
  constructor(private userData: UserDataService, private formBuilder: FormBuilder,
    public toastyService: ToastyService) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });

    this.userData.userDataSubject.subscribe(
      (user: UserData) => {
        this.userForm.controls['userName'].setValue(user.userName);
        this.userForm.controls['email'].setValue(user.email);
      }
    )

  }

  updateUserData() {
    this.userData.setUserData({
      userName: this.userForm.controls['userName'].value,
      email: this.userForm.controls['email'].value
    })

    this.toastyService.showToasty('User Data Updated Successfully!!', 'alert-success')

  }

}
