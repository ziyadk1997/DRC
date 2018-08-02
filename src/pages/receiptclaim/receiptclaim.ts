import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-receiptclaim',
  templateUrl: 'receiptclaim.html'
})
export class ReceiptClaimPage {

  constructor(public navCtrl: NavController) {
  }
  GoBack(){
    this.navCtrl.pop();
  }
 
}
