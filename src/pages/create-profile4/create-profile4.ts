import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreateProfile5} from '../../pages/create-profile5/create-profile5';
import { NavParams } from 'ionic-angular';
import { employer } from '../create-profile0/create-profile0';
import { workExperience } from '../create-profile0/create-profile0';


@Component({
  selector: 'page-create-profile4',
  templateUrl: 'create-profile4.html'
})
export class CreateProfile4 {
  newUserInfo=new employer();
  NewWorkExperience= new workExperience();

  JobTitle:any;
  CompanyName:any;
  From:any;
  To:any;
  Description:any;
  Country:any;
  StartingSalary:any;
  EndingSalary:any;
  Currency:any;
  SalaryPeriod:any;
  

  constructor(public navCtrl: NavController , public navParams: NavParams) {
    this.newUserInfo=this.navParams.data;
    console.log(this.newUserInfo);
  }
  GoToCreate5(){
    this.NewWorkExperience.JobTitle=this.JobTitle;
    this.NewWorkExperience.CompanyName=this.CompanyName;
    this.NewWorkExperience.From=this.From;
    this.NewWorkExperience.To=this.To;
    this.NewWorkExperience.Description=this.Description;
    this.NewWorkExperience.Country=this.Country;
    this.NewWorkExperience.StartingSalary=this.StartingSalary;
    this.NewWorkExperience.EndingSalary=this.EndingSalary;
    this.NewWorkExperience.Currency=this.Currency;
    this.NewWorkExperience.SalaryPeriod=this.SalaryPeriod;
    
    
    this.newUserInfo.WorkExperience.push(this.NewWorkExperience);
    
    
    console.log(this.newUserInfo);


    this.navCtrl.push(CreateProfile5 , this.newUserInfo);
  }
}
