import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddLanguagePage } from '../add-language/add-language';

@Component({
  selector: 'page-view-profile5',
  templateUrl: 'view-profile5.html'
})
export class ViewProfile5Page {

  constructor(public navCtrl: NavController) {
  }
  AddNewLanguage(){
    this.navCtrl.push(AddLanguagePage);
  }
}
