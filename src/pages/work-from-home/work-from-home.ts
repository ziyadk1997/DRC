import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-work-from-home',
  templateUrl: 'work-from-home.html'
})
export class WorkFromHomePage {
  MyDataFrom:any;
  MyDataTo:any;

  constructor(public navCtrl: NavController) {
  }
  
}
