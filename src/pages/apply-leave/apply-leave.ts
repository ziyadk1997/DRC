import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnnualRequestPage } from '../../pages/annual-request/annual-request';

@Component({
  selector: 'page-apply-leave',
  templateUrl: 'apply-leave.html'
})
export class ApplyLeavePage {
  selcValue: String;
  constructor(public navCtrl: NavController) {
    
  }
  GoBack(){

    this.navCtrl.pop();
  }

  onChange(selectedValue){
    this.selcValue=selectedValue;
  }
  GoToAnnualRequest(){
    if(this.selcValue == "sick"){


      this.navCtrl.push("AnnualRequestPage")
    }
  }
 
}
