import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';
import { AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';
import { FCM } from '@ionic-native/fcm'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private loginBE: ServicesProvider, private platform: Platform, private fcm: FCM) {

  }
  email: any;
  password: any;

  ionViewDidLoad() {
    this.fcm.onNotification().subscribe(result =>{
      console.log(result);
      alert(result.body);
    });
  }
  Login() {
    //this.navCtrl.setRoot(WelcomePage);
    if (this.email == null || this.password == null) {
      this.alertCtrl.create(
        {
          title: 'Please Enter Email and Password',
          subTitle: 'The Email or Password are Empty',
          buttons: ['Dismiss']
        }
      ).present()
    } else {
      localStorage.setItem('username', this.email.split("@")[0].toLowerCase());
      this.loginBE.doLogin(this.email, this.password).then(res => {
        if (res == true) {
          this.navCtrl.setRoot(WelcomePage);
        } else {
          this.alertCtrl.create(
            {
              title: 'Login Failed',
              subTitle: 'Wrong username or password',
              buttons: ['Dismiss']
            }
          ).present()
        }
      });
    }
  }
  ForgetPassword() {
    // this.push(ForgetPasswordPage);
  }
}