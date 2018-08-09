import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewProfile2Page } from '../../pages/view-profile2/view-profile2';
import { ViewProfile3Page } from '../../pages/view-profile3/view-profile3';
import { ViewProfile4Page } from '../../pages/view-profile4/view-profile4';
import { ViewProfile5Page } from '../../pages/view-profile5/view-profile5';
import { ViewProfile6Page } from '../../pages/view-profile6/view-profile6';
import { ServicesProvider } from '../../providers/services'

@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html'
})
export class ViewProfilePage {
  option: any;
  infos: any = {};
  userName: any;
  IsHr : boolean = false;
  IsOwner :boolean =false;
  IsAdmin : boolean = false;

  constructor(public navCtrl: NavController, private servicesprovider: ServicesProvider,private RequestBE: ServicesProvider) {
  this.SetHr();
  }

  SetHr(){
    var username = localStorage.getItem("username");
    this.RequestBE.IsHr(username).then((res) => {
      if(res.toString() == "false"){
        this.IsHr=false;
      }else{
        this.IsHr=true;
      }
    });
  }
  SetAdmin(){
    var username = localStorage.getItem("username");
    this.RequestBE.IsAdmin(username).then((res) => {
      if(res.toString() == "false"){
        this.IsAdmin=false;
      }else{
        this.IsAdmin=true;
      }
    });
  }
  SetOwner(){
    var username = localStorage.getItem("username");
    this.RequestBE.IsOwner(username).then((res) => {
      if(res.toString() == "false"){
        this.IsOwner=false;
      }else{
        this.IsOwner=true;
      }
    });
  }

  ionViewDidLoad() {
    this.ViewMyInfo();
  }

  GoBack() {

    this.navCtrl.pop();
  }
  GoToSkills() {
    this.navCtrl.push(ViewProfile2Page , this.infos)
  }
  GoToWorkExperience() {
    this.navCtrl.push(ViewProfile3Page,this.infos);
  }
  GoToEducation() {
    this.navCtrl.push(ViewProfile4Page,this.infos); 
  }
  GoToLanguage() {
    this.navCtrl.push(ViewProfile5Page,this.infos);
  }
  GoToAttachmets() {
    this.navCtrl.push(ViewProfile6Page,this.infos);
  }

  UploadImage() {
    console.log("yala ya wad ya wel3a");
  }
  ViewMyInfo() {
    var username = localStorage.getItem("username");

    this.servicesprovider.ViewMyInfo(username).then(res => {
      console.log(res);
      // var info    ={

      //   Name:res[0],
      //   ppassword:res[1],
      //   NumberOfAnnualVacations:res[2],
      //   NumberOfCasualVacations:res[3],
      //   Gender:res[4],
      //   Email:res[5],
      //   Address:res[6],
      //   Nationality:res[7]


      // }
      this.infos = res;
      this.userName = username;
    })


  }

}
