import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReceiptClaimPage } from '../receiptclaim/receiptclaim';

@Component({
  selector: 'page-travelexpense',
  templateUrl: 'travelexpense.html'
})
export class TravelExpensePage {

  constructor(public navCtrl: NavController) {
  }
  GoToReceiptClaimPage(){
    this.navCtrl.push(ReceiptClaimPage);
  }
}
