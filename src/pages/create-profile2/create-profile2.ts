import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile1Page } from '../create-profile/create-profile';
import {CreateProfile3} from '../create-profile3/create-profile3';
import { NavParams } from 'ionic-angular';
import { employer } from '../create-profile0/create-profile0';


@Component({
  selector: 'page-create-profile2',
  templateUrl: 'create-profile2.html'
})
export class CreateProfile2 {
  JobTitle:any;
  newUserInfo=new employer();

  constructor(public navCtrl: NavController , public navParams: NavParams) {
    this.newUserInfo=this.navParams.data;
    console.log(this.newUserInfo);
  }
  

  Training(){
    this.JobTitle="Training";

    console.log(this.newUserInfo.JobTitle);
  }
  GoToCreate3(){
    this.navCtrl.push(CreateProfile3);
  }
}
