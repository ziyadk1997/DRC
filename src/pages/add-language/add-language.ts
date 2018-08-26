import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';
import { AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-language',
  templateUrl: 'add-language.html'
})
export class AddLanguagePage {
 
  infos: any = {};
  LanguageName:any;
  Reading:any;
  Writing:any;
  Listening:any;
  Speaking:any;
  Justification:any;
  constructor(public navCtrl: NavController , private RequestBE :ServicesProvider , private alertCtrl: AlertController , public navParams: NavParams) {

    this.infos = this.navParams.data;
  }
  AddLanguage(){
    this.navCtrl.push(AddLanguagePage);
  }

  Save(){
    var userName = localStorage.getItem("username");
    this.RequestBE.AddNewLanguage(this.infos.username, this.LanguageName,this.Reading,this.Writing,this.Listening,this.Speaking,this.Justification).then (res => {
      if (res == true) {
        this.alertCtrl.create(
          {
            title: 'Language added',
            subTitle: 'New Language added for this user ',
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
}
