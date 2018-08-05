import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRequestInfo } from '../ViewRequestInfo/ViewRequestInfo';

@Component({
  selector: 'page-ViewSickRequests',
  templateUrl: 'ViewSickRequests.html'
})
export class ViewSickRequests {

  constructor(public navCtrl: NavController) {
  }
  GoToViewRequest(){
    this.navCtrl.push(ViewRequestInfo);
  }
}