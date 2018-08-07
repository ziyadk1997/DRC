import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewRequested } from '../ViewRequested/ViewRequested';
import { ServicesProvider } from '../../providers/services';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-RequestInfoPage',
  templateUrl: 'RequestInfoPage.html'
})
export class RequestInfoPage {
  requests: any = [];
  requestid: any;

  constructor(public navCtrl: NavController, private navparams: NavParams, private alertCtrl: AlertController, private RequestBE: ServicesProvider) {
    this.requestid = this.navparams.data.reqId;
    console.log(this.requestid)
  }
  GoToRequestsPage() {


  }

  ionViewDidLoad() {
    
    var username = localStorage.getItem("username");
    this.RequestBE.ViewRequestbyId(this.requestid).then((res: any) => {
      if (res != null) {
        this.requests = res;
      }
    });
  }
  AcceptRequest() {
    var username = localStorage.getItem("username");
    this.RequestBE.ApproveRequest(username, this.requestid).then((res: any) => {
      if (res == true) {
        this.navCtrl.setRoot(ViewRequested);
      } else {
        this.alertCtrl.create(
          {
            title: 'Operation Failed',
            subTitle: 'Wrong username or password',
            buttons: ['Dismiss']
          }
        ).present()
      }
    });
  }

}
