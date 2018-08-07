import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services'
@Component({
  selector: 'page-ViewRequestInfo',
  templateUrl: 'ViewRequestInfo.html'
})
export class ViewRequestInfo {
  requests: any = [];
  Type
  
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider) {
    var requestid = localStorage.getItem("requestid");
    var username = localStorage.getItem("username");
    this.RequestBE.ViewMySickRequests(username).then((res: any) => {
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
    }});
  }

  
}