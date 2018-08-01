import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRequested } from '../ViewRequested/ViewRequested';

@Component({
  selector: 'page-RequestInfoPage',
  templateUrl: 'RequestInfoPage.html'
})
export class RequestInfoPage {

  constructor(public navCtrl: NavController) {
  }
  GoToRequestsPage(){
      this.navCtrl.push(ViewRequested);
  }
  openHomepage(){
    this.navCtrl.popToRoot();
  }
  
}
