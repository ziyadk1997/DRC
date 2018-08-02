import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeaveTrackerPage } from '../LeaveTracker/LeaveTracker';
import { AnnualRequestPage } from '../annual-request/annual-request';
import { SwitchView } from '../../../node_modules/@angular/common/src/directives/ng_switch';

@Component({
  selector: 'page-apply-leave',
  templateUrl: 'apply-leave.html'
})
export class ApplyLeavePage {
  MyDataFrom: any;
  MyDataTo: any;
  Request: any;
  HideFlag: boolean = false;
  selected: number;
  constructor(public navCtrl: NavController) {

  }
  GoBack() {
    this.navCtrl.pop();
  }
  GoToAnnualRequest(){
      this.navCtrl.push(LeaveTrackerPage)
  }
  Glow(id) {
    this.selected = id;
  }
  SetFlag(){
    
    if(this.Request=='Sick'){
      this.HideFlag = true;
    }else{
      this.HideFlag = false;
    }
    console.log(this.Request)
  }
  openHomepage() {
    this.navCtrl.popToRoot();
  }


}
