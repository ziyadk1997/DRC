import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile3 } from '../create-profile3/create-profile3';
import { employer } from '../create-profile0/create-profile0';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'create-profile7-page',
  templateUrl: 'create-profile7.html'
})
export class CreateProfile7Page {
  JobTitle:any;
  Salary:String;
  Allowance:String;
  AboveMangerUserName:String;
  NoOfAnnualVacations:String;
  NoOfCasualVacations:String;
  


  newUserInfo=new employer();
  constructor(public navCtrl: NavController , public navParams: NavParams) {
    this.newUserInfo=this.navParams.data;
    console.log(this.newUserInfo);
  }
  GoToCreate3(){

    this.newUserInfo.JobTitle=this.JobTitle;
    this.newUserInfo.Salary=this.Salary;
    this.newUserInfo.Allowance=this.Allowance;
    this.newUserInfo.AboveMangerUserName=this.AboveMangerUserName;
    this.newUserInfo.NoOfAnnualVacations=this.NoOfAnnualVacations;
    this.newUserInfo.NoOfCasualVacations=this.NoOfCasualVacations;
    console.log(this.newUserInfo);

    this.navCtrl.push(CreateProfile3 , this.newUserInfo);
  }
  
}