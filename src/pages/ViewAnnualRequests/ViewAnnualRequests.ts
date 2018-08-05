import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRequestInfo } from '../ViewRequestInfo/ViewRequestInfo';
import { ServicesProvider } from '../../providers/services';
@Component({
  selector: 'page-ViewAnnualRequests',
  templateUrl: 'ViewAnnualRequests.html'
})
export class ViewAnnualRequests {
  requests: any = [];
  constructor(public navCtrl: NavController, private RequestsBE: ServicesProvider) {
    var username = localStorage.getItem("username");
    this.RequestsBE.ViewMyCasualRequests(username).then((res: any) => {
      console.log(res)
      var length = (res.length) / 4;
      console.log(length);
      for (let i = 0; i < length; i++) {
        var request = {
          Type: res[4 * i],
          Date: res[4 * i + 1],
          RUsername: res[4 * i + 2],
          Status: res[4 * i + 3]
        }
        this.requests[i] = request
      }
    });
  }
  GoToViewRequest(){
    this.navCtrl.push(ViewRequestInfo);
  }
  
}
