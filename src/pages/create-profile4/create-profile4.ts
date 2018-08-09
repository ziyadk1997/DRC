import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreateProfile5} from '../../pages/create-profile5/create-profile5';


@Component({
  selector: 'page-create-profile4',
  templateUrl: 'create-profile4.html'
})
export class CreateProfile4 {
    

  constructor(public navCtrl: NavController) {
  }
  GoToCreate5(){
    this.navCtrl.push(CreateProfile5);
  }
}
