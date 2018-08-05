import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRequestInfo } from '../ViewRequestInfo/ViewRequestInfo';

@Component({
  selector: 'page-ViewAnnualRequests',
  templateUrl: 'ViewAnnualRequests.html'
})
export class ViewAnnualRequests {

  constructor(public navCtrl: NavController) {
  }
  GoToViewRequest(){
    this.navCtrl.push(ViewRequestInfo);
  }
  
}