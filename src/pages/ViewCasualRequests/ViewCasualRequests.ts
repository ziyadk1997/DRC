import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RequestInfoPage} from '../../pages/RequestInfoPage/RequestInfoPage';
import { ServicesProvider } from '../../providers/services'

@Component({
  selector: 'page-ViewCasualRequests',
  templateUrl: 'ViewCasualRequests.html'
})
export class ViewCasualRequests {
  requests: any = [];
  constructor(public navCtrl: NavController,private RequestBE:ServicesProvider) {
  
  }
  ionViewDidLoad()
  {
    var username = localStorage.getItem("username");
    this.RequestBE.ViewMyCasualRequests(username).then((res: any) => {
      if(res!=null){
      this.requests = res;
    }});
  }
  
  ViewDetails(requestid: any){
    this.navCtrl.push(RequestInfoPage, { reqId: requestid });
  }
  
}