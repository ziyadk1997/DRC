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
  Name: any;
  constructor(public navCtrl: NavController, private servicesprovider: ServicesProvider) {
  }

  ionViewDidLoad() {
    this.ViewMyInfo();
  }

  GoBack() {

    this.navCtrl.pop();
  }
  test() {
    if (this.option == 'skills') {
      this.navCtrl.push(ViewProfile2Page);
    }
    if (this.option == 'workexperience') {
      this.navCtrl.push(ViewProfile3Page);
    }
    if (this.option == 'education') {
      this.navCtrl.push(ViewProfile4Page);
    }
    if (this.option == 'language') {
      this.navCtrl.push(ViewProfile5Page);
    }
    if (this.option == 'attachment') {
      this.navCtrl.push(ViewProfile6Page);
    }
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
      this.Name = res[0];
    })


  }
}
