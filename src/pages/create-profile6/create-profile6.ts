import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { NavParams } from 'ionic-angular';
import { employer } from '../create-profile0/create-profile0';
import { ServicesProvider } from '../../providers/services';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-create-profile6',
  templateUrl: 'create-profile6.html'
})
export class CreateProfile6 {
  newUserInfo=new employer();

  constructor(public navCtrl: NavController , public navParams: NavParams ,private servicesprovider: ServicesProvider ,  private alertCtrl: AlertController) {
    this.newUserInfo=this.navParams.data;
    console.log(this.newUserInfo );
  }
  SaveAndQuit(){


    this.servicesprovider.CreateNewUser(this.newUserInfo).then(res => {
      if (res == true) {
        this.alertCtrl.create(
          {
            title: 'New user acount',
            subTitle: 'you have been created new user',
            buttons: ['Okay']
          }
        ).present()
        this.navCtrl.setRoot(WelcomePage);
        //this.navCtrl.pop();
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
