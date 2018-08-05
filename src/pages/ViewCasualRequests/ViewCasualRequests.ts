import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRequestInfo } from '../ViewRequestInfo/ViewRequestInfo';

@Component({
  selector: 'page-ViewCasualRequests',
  templateUrl: 'ViewCasualRequests.html'
})
export class ViewCasualRequests {

  constructor(public navCtrl: NavController) {
  }
  GoToViewRequest(){
    this.navCtrl.push(ViewRequestInfo);
  }
  
}