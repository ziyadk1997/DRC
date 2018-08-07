import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestInfoPage } from '../../pages/RequestInfoPage/RequestInfoPage';
import { ServicesProvider } from '../../providers/services'
@Component({
  selector: 'page-ViewRequested',
  templateUrl: 'ViewRequested.html'
})
export class ViewRequested {
  requests: any = [];
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider) {

  }

  ionViewDidLoad() {
    var username = localStorage.getItem("username");
    this.RequestBE.ViewMyReviewedRequests(username).then((res: any) => {
      if (res != null) {
        this.requests = res;
      }
    });
  }

  ViewDetails(requestid: any) {
    console.log(requestid);
    this.navCtrl.push(RequestInfoPage, { reqId: requestid })
  }
  GoToRequestInfo() {

  }
}