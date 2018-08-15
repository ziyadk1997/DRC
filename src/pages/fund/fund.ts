import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';
import { AlertController } from 'ionic-angular';
import { FinancialPage } from '../financial/financial';
//import { GlobalsService } from '../../providers/globals';
@Component({
  selector: 'page-fund',
  templateUrl: 'fund.html'
})
export class FundPage {
  Request: any;
  Comment: String;
  Amount:any;
  Duedate:any;
  Currency:any;
  constructor(public navCtrl: NavController,  private alertCtrl: AlertController,private servicesprovider: ServicesProvider) {
  }
  GoBack(){
    this.navCtrl.pop();
  }
  ApplyFund(){
    var username = localStorage.getItem("username");
    this.servicesprovider.ApplyFundRequest(username, this.Comment, this.Amount, this.Duedate ,this.Currency).then(res => {
      if (res == true) {
        this.alertCtrl.create(
          {
            title: 'Request Submitted',
            subTitle: 'Your request was submitted to your manager',
            buttons: ['Okay']
          }
        ).present()
        this.navCtrl.pop();
      } else {
        this.alertCtrl.create(
          {
            title: 'Request Submition failed',
            subTitle: 'Please fill request form correctly',
            buttons: ['Dismiss']
          }
        ).present()
      }
    });
  }
}