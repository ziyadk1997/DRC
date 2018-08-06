import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRequested } from '../ViewRequested/ViewRequested';
import { ServicesProvider } from '../../providers/services'
@Component({
  selector: 'page-RequestInfoPage',
  templateUrl: 'RequestInfoPage.html'
})
export class RequestInfoPage {
  requests: any = [];
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider) {
  }
  GoToRequestsPage(){
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
      this.navCtrl.pop();
  }

  
}
