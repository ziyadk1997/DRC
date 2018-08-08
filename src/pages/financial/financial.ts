import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FundPage } from '../fund/fund';
import { ServicesProvider } from '../../providers/services';
import { GlobalsService } from '../../providers/globals';

@Component({
  selector: 'page-financial',
  templateUrl: 'financial.html'
})
export class FinancialPage {
  salary :any;
  constructor(public navCtrl: NavController,  private RequestBE: ServicesProvider, private globals: GlobalsService ) {
  }
  GoToFundRequest(){
    this.navCtrl.push(FundPage);
  }
  ionViewDidLoad()
  {
    this.RequestBE.ViewMySalary(this.globals.username).then((res: any) => {
      if(res!=null){
      this.salary = res;
    }});
  }
}
