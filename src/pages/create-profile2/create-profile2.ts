import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile1Page } from '../create-profile/create-profile';
import {CreateProfile3} from '../create-profile3/create-profile3';
import { NavParams } from 'ionic-angular';
import { employer } from '../create-profile0/create-profile0';
import { CreateProfile7Page } from '../create-profile7/create-profile7';


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
    this.newUserInfo.CareerLevel="Training";
    console.log(this.newUserInfo.CareerLevel);
  }
  Junior(){
    this.newUserInfo.CareerLevel="Junior";
    console.log(this.newUserInfo.CareerLevel);
  }
  Senior(){
    this.newUserInfo.CareerLevel="Senior";
    console.log(this.newUserInfo.CareerLevel);
  }

  TeamLead(){
    this.newUserInfo.CareerLevel="TeamLead";
    console.log(this.newUserInfo.CareerLevel);
  }
  Manager(){
    this.newUserInfo.CareerLevel="Manager";
    console.log(this.newUserInfo.CareerLevel);    
  }
  GoToCreate3(){
    console.log(this.newUserInfo);

    this.navCtrl.push(CreateProfile7Page , this.newUserInfo);
  }
}
