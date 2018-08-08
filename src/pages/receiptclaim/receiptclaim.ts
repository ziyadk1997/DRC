import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-receiptclaim',
  templateUrl: 'receiptclaim.html'
})
export class ReceiptClaimPage {
  username:String;
  Amount : String ;
  comment : String;
  dueDate :String;
  reciptLink : String;
  constructor(public navCtrl: NavController, private servicesprovider: ServicesProvider, private ApplyleaveBE: ServicesProvider, private alertCtrl: AlertController) {
  }
  GoBack(){
    this.navCtrl.pop();
  }
 ApplyForRecieptClaim(){
   this.username  = localStorage.getItem("username");
  this.servicesprovider.ApplyReciptClaimRequest(this.username, this.Amount , this.comment, this.dueDate,"this.reciptLink" ).then(res => {
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
