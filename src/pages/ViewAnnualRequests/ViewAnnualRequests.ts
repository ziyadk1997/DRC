import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services'
import { RequestInfoPage } from '../RequestInfoPage/RequestInfoPage';
import { ViewRequestInfo } from '../ViewRequestInfo/ViewRequestInfo';
@Component({
  selector: 'page-ViewAnnualRequests',
  templateUrl: 'ViewAnnualRequests.html'
})
export class ViewAnnualRequests {
  requests: any = [];
  constructor(public navCtrl: NavController, private RequestsBE: ServicesProvider) {

  }
  ionViewDidLoad()
  {
    var username = localStorage.getItem("username");
    this.RequestsBE.ViewMyAnnualRequests(username).then((res: any) => {
      if(res!=null){
      this.requests = res;
    }});
  }
  ViewDetails(){
    this.navCtrl.push(ViewRequestInfo);
  }

}
