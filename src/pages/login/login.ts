import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';
import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  IsHr : boolean = false;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private loginBE: ServicesProvider) {
    var username = localStorage.getItem("username");
      this.loginBE.IsManagerorAdminorOwner(username).then((res: any) => {
       console.log(res)
      });
      this.loginBE.IsHr(username).then((res: any) => {
          });
  }
  email: any;
  password: any;

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
      localStorage.setItem('username',this.email.split("@")[0].toLowerCase());
      this.loginBE.doLogin(this.email, this.password).then(res => {
        if (res == true) {
          this.navCtrl.setRoot(WelcomePage,this.IsHr);
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
}