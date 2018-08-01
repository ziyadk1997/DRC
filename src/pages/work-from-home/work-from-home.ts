import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ WorkFromHomeSummaryPage} from '../work-from-home-summary/work-from-home-summary';
@Component({
  selector: 'page-work-from-home',
  templateUrl: 'work-from-home.html'
})
export class WorkFromHomePage {
  MyDataFrom:any;
  MyDataTo:any;

  constructor(public navCtrl: NavController) {
  }
  GoToWorkFromHomeSummaryPage(){
    this.navCtrl.push(WorkFromHomeSummaryPage);
  }
}
