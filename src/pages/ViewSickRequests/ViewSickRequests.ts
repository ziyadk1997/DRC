import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RequestInfoPage} from '../../pages/RequestInfoPage/RequestInfoPage';
import { ServicesProvider } from '../../providers/services'

@Component({
  selector: 'page-ViewSickRequests',
  templateUrl: 'ViewSickRequests.html'
})
export class ViewSickRequests {
  requests: any = [];
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider) {

  }
  ionViewDidLoad()
  {
    var username = localStorage.getItem("username");
    this.RequestBE.ViewMySickRequests(username).then((res: any) => {
      if(res!=null){
      this.requests = res;
    }});
  }
 
  ViewDetails(requestid: any){
    this.navCtrl.push(RequestInfoPage, { reqId: requestid });
  }
}