import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-fund',
  templateUrl: 'fund.html'
})
export class FundPage {

  constructor(public navCtrl: NavController,  private alertCtrl: AlertController) {
  }
  GoBack(){
    this.navCtrl.pop();
  }
  
  
}
