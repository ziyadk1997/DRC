import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FundPage } from '../fund/fund';
import { ServicesProvider } from '../../providers/services';

@Component({
  selector: 'page-financial',
  templateUrl: 'financial.html'
})

export class FinancialPage {
  financials :any =[];
  constructor(public navCtrl: NavController,private RequestsBE: ServicesProvider) {
  }
  salary : any;
  GoToFundRequest(){
    this.navCtrl.push(FundPage);
  }
  ionViewDidLoad()
  {
    var username = localStorage.getItem("username");
    this.RequestsBE.ViewMyTransactions(username).then((res: any) => {
      if(res!=null){
      this.financials = res;
    }});
    var username = localStorage.getItem("username");
    this.RequestsBE.ViewMySalary(username).then((res: any) => {
      if(res!=null){
      this.salary = res;
    }});
  }
}
