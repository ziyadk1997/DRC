import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RequestInfoPage} from '../../pages/RequestInfoPage/RequestInfoPage';
@Component({
  selector: 'page-ViewRequested',
  templateUrl: 'ViewRequested.html'
})
export class ViewRequested {

  constructor(public navCtrl: NavController) {
  }
  openHomepage(){
    this.navCtrl.popToRoot();
  }
  ShowRequestInfo(){
    this.navCtrl.push(RequestInfoPage);
  }
  
}