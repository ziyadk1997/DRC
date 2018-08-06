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
  requestid: any;
  
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider) {
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

  
}
