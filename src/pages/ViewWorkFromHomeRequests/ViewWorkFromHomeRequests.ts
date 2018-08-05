import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRequestInfo } from '../ViewRequestInfo/ViewRequestInfo';
import { ServicesProvider } from '../../providers/services'

@Component({
  selector: 'page-ViewWorkFromHomeRequests',
  templateUrl: 'ViewWorkFromHomeRequests.html'
})
export class ViewWorkFromHomeRequests {
  requests: any = [];
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider) {
    var username = localStorage.getItem("username");
    this.RequestBE.ViewMyWorkFromHomeRequests(username).then((res: any) => {
      console.log(res)
     if(res!=null){
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
    } });
  }
  GoToViewRequest() {
    this.navCtrl.push(ViewRequestInfo);
  }
}