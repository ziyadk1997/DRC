import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-language',
  templateUrl: 'add-language.html'
})
export class AddLanguagePage {

  constructor(public navCtrl: NavController) {
  }
  AddLanguage(){
    this.navCtrl.push(AddLanguagePage);
  }
}
