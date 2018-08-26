import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-work-experience',
  templateUrl: 'add-work-experience.html'
})
export class AddWorkExperiencePage {
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

  constructor(public navCtrl: NavController) {
  }
  AddNewWork(){
    this.navCtrl.push(AddWorkExperiencePage);
  }
}
