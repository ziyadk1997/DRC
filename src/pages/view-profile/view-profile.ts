import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, private servicesprovider: ServicesProvider,private navparams:NavParams) {
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
    console.log("TODO THE UPLOAD");
  }

  ViewMyInfo() {
    var username = this.navparams.data;
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
