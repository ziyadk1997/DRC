import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-annual-request',
  templateUrl: 'annual-request.html',
})
export class AnnualRequestPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnualRequestPage');
  }
  GoBack(){

    this.navCtrl.pop();
  }

}
