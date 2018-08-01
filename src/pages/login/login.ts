import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';
import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent , HttpClient } from '@angular/common/http'
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  constructor(public navCtrl: NavController,private http: HttpClient,private alertCtrl: AlertController) {
  }
  email:any;
  password:any;
  Login(){
    this.navCtrl.setRoot(WelcomePage)//setRoot(WelcomePage);
  //   var user = JSON.stringify
  //           ({
  //               "username": this.email,
  //               "password": this.password
  //           });

  //       var config = {
  //           headers: {
  //               'Content-Type': 'application/json'
  //           }
  //       }
  //       this.http.post('http://localhost:8080/login',user,config).subscribe(res => {
  //         var data = res;
  //         if(data==true){
  //           this.navCtrl.push(WelcomePage)//setRoot(WelcomePage);
  //         }else{
  //          this.alertCtrl.create(
  //            {title: 'Login Failed',
  //          subTitle: 'Wrong username or password',
  //          buttons: ['Dismiss']}
  //         ).present()
  //         }},err => { });
   }

}
