import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile2 } from '../create-profile2/create-profile2';

@Component({
  selector: 'page-create-profile0',
  templateUrl: 'create-profile0.html'
})
export class CreateProfilePage {

  FullName: string;
  Nationality: String;
  Address: String;
  MobileNumber: String;
  Email: String;
  Password:String;
  EmployeeID:String;
  NumberOfDependencies:String;

  newUserInfo = new employer();;

  MaleCheckBox: boolean = false;
  FemaleCheckBox: boolean = false;
  SingleCheckBox: boolean = false;
  MarriedCheckBox: boolean = false;
  NotApplicableCheckBox: boolean = false;
  ExampledCheckBox: boolean = false;
  CompletedCheckBox: boolean = false;
  PostponedCheckBox: boolean = false;



  constructor(public navCtrl: NavController) {
    



  }

  MaleCheckBoxChanged() {

    if (this.MaleCheckBox == true) {
      this.newUserInfo.Gender = "male";
      this.FemaleCheckBox = false;
      console.log(this.newUserInfo.Gender);
    }
  }
  FemaleCheckBoxChanged() {

    if (this.FemaleCheckBox == true) {
      this.newUserInfo.Gender = "Female"
      this.MaleCheckBox = false;
      console.log(this.newUserInfo.Gender);

    }
  }

  SingleCheckBoxChanged() {
    if (this.SingleCheckBox == true) {
      this.newUserInfo.SocialStatus = "Single";
      this.MarriedCheckBox = false
      console.log(this.newUserInfo.SocialStatus);
    }

  }

  MarriedCheckBoxChanged() {
    if (this.MarriedCheckBox == true) {
      this.newUserInfo.SocialStatus = "Married";
      this.SingleCheckBox = false;
      console.log(this.newUserInfo.SocialStatus);
    }
  }
  NotApplicableCheckBoxChanged() {
    if (this.NotApplicableCheckBox == true) {
      this.newUserInfo.MilitaryServices = "Not Applicable";
      this.ExampledCheckBox = false;
      this.CompletedCheckBox = false;
      this.PostponedCheckBox = false;
      console.log(this.newUserInfo.MilitaryServices);
    }
  }

  ExampledChanged() {
    if (this.ExampledCheckBox == true) {
      this.newUserInfo.MilitaryServices = "Exampled";
      this.NotApplicableCheckBox = false;
      this.CompletedCheckBox = false;
      this.PostponedCheckBox = false;
      console.log(this.newUserInfo.MilitaryServices);

    }
  }
  CompletedCheckBoxChanged() {
    if (this.CompletedCheckBox == true) {
      this.newUserInfo.MilitaryServices = "Completed";
      this.NotApplicableCheckBox = false;
      this.ExampledCheckBox = false;
      this.PostponedCheckBox = false;
      console.log(this.newUserInfo.MilitaryServices);

    }
  }
  PostponedCheckBoxChanged() {
    if (this.PostponedCheckBox == true) {
      this.newUserInfo.MilitaryServices = "Postponed";
      this.NotApplicableCheckBox = false;
      this.ExampledCheckBox = false;
      this.CompletedCheckBox = false;
      console.log(this.newUserInfo.MilitaryServices);

    }
  }

  GoToProfile2() {
  //  this.newUserInfo = new employer();
    
    this.newUserInfo.AdderUserName=localStorage.getItem("username");


    this.newUserInfo.FullName=this.FullName;
    this.newUserInfo.Nationality=this.Nationality;
    this.newUserInfo.Address=this.Address;
    this.newUserInfo.MobileNumber=this.MobileNumber;
    this.newUserInfo.Email=this.Email;
    this.newUserInfo.Password=this.Password;
    this.newUserInfo.EmployeeID=this.EmployeeID;
    this.newUserInfo.NumberOfDependencies=this.NumberOfDependencies;
    console.log(this.newUserInfo);

    this.navCtrl.push(CreateProfile2, this.newUserInfo);
  }

}


export class employer {
  AdderUserName:String;
  FullName: string;
  Gender: String;
  Nationality: String;
  Address: String;
  MobileNumber: String;
  Email: String;
  Password:String;
  EmployeeID:String;
  SocialStatus: String;
  NumberOfDependencies:String;
  MilitaryServices: String;
  CareerLevel:string;
  JobTitle:string;
  Salary:String;
  Allowance:String;
  AboveMangerUserName:String;
  NoOfAnnualVacations:String;
  NoOfCasualVacations:String;
  isHr:String;
  Skills=[];
  WorkExperience=[];
  Languages=[];
}
export class skill{
  SkillName:any;
  Profeciency:any;
  Interest:any;
  YearsOfExperience:any;
}
export class  workExperience{
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
}
export class Language{

  LanguageName:any;
  Reading:any;
  Writing:any;
  Listening:any;
  Speaking:any;
  Justification:any;

}