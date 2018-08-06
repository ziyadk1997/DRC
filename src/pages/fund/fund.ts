import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-fund',
  templateUrl: 'fund.html'
})
export class FundPage {

  constructor(public navCtrl: NavController) {
  }
  GoBack(){
    this.navCtrl.pop();
  }
  
}
