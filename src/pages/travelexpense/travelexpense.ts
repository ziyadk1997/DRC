import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReceiptClaimPage } from '../receiptclaim/receiptclaim';
import { ServicesProvider } from '../../providers/services';
import { RequestInfoPage } from '../RequestInfoPage/RequestInfoPage';

@Component({
  selector: 'page-travelexpense',
  templateUrl: 'travelexpense.html'
})
export class TravelExpensePage {
  requests :any =[];
  constructor(public navCtrl: NavController,private RequestsBE: ServicesProvider) {
  }
  GoToReceiptClaimPage(){
    this.navCtrl.push(ReceiptClaimPage);
  }
  ionViewDidLoad()
  {
    var username = localStorage.getItem("username");
    console.log("AAA");
    this.RequestsBE.ViewMyExpenses(username).then((res: any) => {
      if(res!=null){
      this.requests = res;
    }});
  }
  ViewDetails(requestid: any){
    //console.log(requestid)
    this.navCtrl.push(RequestInfoPage, { reqId: requestid });
  }

}
