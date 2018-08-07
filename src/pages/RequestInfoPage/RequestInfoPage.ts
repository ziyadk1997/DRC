import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private RequestBE: ServicesProvider) {
  }
  GoToRequestsPage(){
  
    
  }

  ionViewDidLoad()
  {
    var username = localStorage.getItem("username");
    var requestid = localStorage.getItem('requestid');
    this.RequestBE.ViewRequestbyId(requestid).then((res: any) => {
      if(res!=null){
      this.requests = res;
    }});
  }
AcceptRequest(){
  var username = localStorage.getItem("username");
    var requestid = localStorage.getItem('requestid');
  this.RequestBE.ApproveRequest(username,requestid).then((res: any) => {
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
