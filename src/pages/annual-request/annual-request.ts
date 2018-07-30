import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnnualRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
