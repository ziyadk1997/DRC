import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/timeout';
import { config } from './config'
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  constructor(public http: HttpClient) {
    
  }

  doLogin(email, password) {
    var user = JSON.stringify
      ({
        "username": email,
        "password": password
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "login", user).timeout(config.getTimeout).subscribe(res => {
        try {
          resolve(res);
        }
        catch (e) {
          reject(false);
        }
      },
        error => {
          reject(error);
        });
    });



    // this.http.post('http://localhost:8080/login',user,config).subscribe(res => {
    //   var data = res;
    //   if(data==true){
    //     this.navCtrl.push(WelcomePage)//setRoot(WelcomePage);
    //   }else{
    //    this.alertCtrl.create(
    //      {title: 'Login Failed',
    //    subTitle: 'Wrong username or password',
    //    buttons: ['Dismiss']}
    //   ).present()
    //   }},err => { });
  }
}
