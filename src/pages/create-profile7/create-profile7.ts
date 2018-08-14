import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile3 } from '../create-profile3/create-profile3';
import { employer } from '../create-profile0/create-profile0';

@Component({
  selector: 'create-profile7-page',
  templateUrl: 'create-profile7.html'
})
export class CreateProfile7Page {
  JobTitle:any;
  newUserInfo=new employer();
  constructor(public navCtrl: NavController) {
  }
  GoToCreate3(){
    console.log(this.newUserInfo);

    this.navCtrl.push(CreateProfile3 , this.newUserInfo);
  }
  
}