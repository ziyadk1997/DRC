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
    
      this.navCtrl.pop();
  }

  
}
