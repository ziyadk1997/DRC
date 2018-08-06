import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RequestInfoPage} from '../../pages/RequestInfoPage/RequestInfoPage';
import { ServicesProvider } from '../../providers/services'
@Component({
  selector: 'page-ViewRequested',
  templateUrl: 'ViewRequested.html'
})
export class ViewRequested {
  requests: any = [];
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider) {
    var username = localStorage.getItem("username");
    this.RequestBE.ViewMyReviewedRequests(username).then((res: any) => {
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
  
  ShowRequestInfo(){
    this.navCtrl.pop();
  }
  ViewDetails(){
    this.navCtrl.push(RequestInfoPage)
  }
}