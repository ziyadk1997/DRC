import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services'
import {RequestInfoPage} from '../../pages/RequestInfoPage/RequestInfoPage';

@Component({
  selector: 'page-ViewWorkFromHomeRequests',
  templateUrl: 'ViewWorkFromHomeRequests.html'
})
export class ViewWorkFromHomeRequests {
  requests: any = [];
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider) {

  }
  ionViewDidLoad()
  {
    var username = localStorage.getItem("username");
    this.RequestBE.ViewMyWorkFromHomeRequests(username).then((res: any) => {
      if(res!=null){
      this.requests = res;
    }});
  }
  ViewDetails(requestid: any){
    this.navCtrl.push(RequestInfoPage, { reqId: requestid });
  }
}