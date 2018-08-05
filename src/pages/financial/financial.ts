import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FundPage } from '../fund/fund';

@Component({
  selector: 'page-financial',
  templateUrl: 'financial.html'
})
export class FinancialPage {

  constructor(public navCtrl: NavController) {
  }
  GoToFundRequest(){
    this.navCtrl.push(FundPage);
  }
}
