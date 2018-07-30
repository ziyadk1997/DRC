import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../apply-leave/apply-leave';

@Component({
  selector: 'page-LeaveTracker',
  templateUrl: 'LeaveTracker.html'
})
export class LeaveTrackerPage {

  constructor(public navCtrl: NavController) {
  }
  GoToApplyLeavePage(){

    this.navCtrl.push(ApplyLeavePage);
  }
}
