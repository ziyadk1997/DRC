import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';
import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http'
import { AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private loginBE: ServicesProvider) {
  }
  email: any;
  password: any;
  Login() {
    this.navCtrl.setRoot(WelcomePage);
    // this.loginBE.doLogin(this.email, this.password).then(res => {

    //   if (res == true) {
    //     this.navCtrl.setRoot(WelcomePage);
    //   } else {
    //     this.alertCtrl.create(
    //       {
    //         title: 'Login Failed',
    //         subTitle: 'Wrong username or password',
    //         buttons: ['Dismiss']
    //       }
    //     ).present()
    //   }
    // });
  }

}
