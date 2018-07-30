import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';
import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent , HttpClient } from '@angular/common/http'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,private http: HttpClient) {
  }
  email:any;
  password:any;
  Login(){
    this.navCtrl.push(WelcomePage)//setRoot(WelcomePage);
  //   var user = JSON.stringify
  //           ({
  //               username: this.email,
  //               password: this.password
  //           });

  //       var config = {
  //           headers: {
  //               'Content-Type': 'application/json'
  //           }
  //       }

  //       this.http.get('http://localhost:8080/login').subscribe(res => {
  //         var data = res;
  //         if(data==true){
  //           this.navCtrl.push(WelcomePage)//setRoot(WelcomePage);
  //         }else{
  //           alert("Login Failed");
  //         }},err => { });
   }
}
