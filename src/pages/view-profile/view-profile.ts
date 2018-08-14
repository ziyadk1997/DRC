import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ViewProfile2Page } from '../../pages/view-profile2/view-profile2';
import { ViewProfile3Page } from '../../pages/view-profile3/view-profile3';
import { ViewProfile4Page } from '../../pages/view-profile4/view-profile4';
import { ViewProfile5Page } from '../../pages/view-profile5/view-profile5';
import { ViewProfile6Page } from '../../pages/view-profile6/view-profile6';
import { ServicesProvider } from '../../providers/services'
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html'
})
export class ViewProfilePage {
  option: any;
  infos: any = {};
  userName: any;
  IsHr: boolean = false;
  IsOwner: boolean = false;
  IsAdmin: boolean = false;
  IsSameuser: boolean = false;
 
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider,private navparams:NavParams, private alertCtrl: AlertController) {
    this.SetHr();
    this.SetOwner();
    this.SetAdmin();
 this.IsSame();
  
  }

  ionViewDidLoad() {
    
    this.ViewMyInfo();
 
  }

  SetHr() {
    var username = localStorage.getItem("username");
    this.RequestBE.IsHr(username).then((res) => {
      if (res.toString() == "false") {
        this.IsHr = false;
      } else {
        this.IsHr = true;
      }
    });
  }
  SetAdmin() {
    var username = localStorage.getItem("username");
    this.RequestBE.IsAdmin(username).then((res) => {
      if (res.toString() == "false") {
        this.IsAdmin = false;
      } else {
        this.IsAdmin = true;
      }
    });
  }

IsSame(){
  var username = localStorage.getItem("username");
  var vistor = this.navparams.data;
if(username == vistor){
  this.IsSameuser=true;
}
else{
  this.IsSameuser = false;
}
}

  SetOwner() {
    var username = localStorage.getItem("username");
    this.RequestBE.IsOwner(username).then((res) => {
      if (res.toString() == "false") {
        this.IsOwner = false;
      } else {
        this.IsOwner = true;
      }
    });
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
    this.RequestBE.ViewMyInfo(username).then(res => {
      console.log(res);
      this.infos = res;
      this.userName = username;
    })
  }
  MakeAdmin(){
    var username = this.navparams.data;
    this.RequestBE.AddAdmin(username).then(res => {
      if (res == true) {
      this.alertCtrl.create(
        {
          title: 'Operation Done Successfully',
          subTitle: 'This user is now  an admin',
          buttons: ['Okay']
        }
      ).present()
      this.navCtrl.pop();
    } else {
      this.alertCtrl.create(
        {
          title: 'Request Submition failed',
          subTitle: 'Please fill request form correctly',
          buttons: ['Dismiss']
        }
      ).present()
    }
  });
  }
  RemoveAdmin(){
    var username = this.navparams.data;
    this.RequestBE.RemoveAdmin(username).then(res => {
      if (res == true) {
      this.alertCtrl.create(
        {
          title: 'Operation Done Successfully',
          subTitle: 'This user is now not an admin',
          buttons: ['Okay']
        }
      ).present()
      this.navCtrl.pop();
    } else {
      this.alertCtrl.create(
        {
          title: 'Remove failed',
          subTitle: 'Operation Failed',
          buttons: ['Dismiss']
        }
      ).present()
    }
  });
  }
  RemoveEmployee(){
    var username = this.navparams.data;
    this.RequestBE.RemoveEmployee(username).then(res => {if (res == true) {
      if (res == true) {
        this.alertCtrl.create(
          {
            title: 'User was Removed',
            subTitle: 'User was removed from system successfully',
            buttons: ['Okay']
          }
        ).present()
        this.navCtrl.pop();
      } else {
        this.alertCtrl.create(
          {
            title: 'Remove failed',
            subTitle: 'Operation Failed',
            buttons: ['Dismiss']
          }
        ).present()
      }}
  });
  }

}
