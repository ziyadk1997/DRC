import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile1Page } from '../create-profile/create-profile';
import {CreateProfile3} from '../create-profile3/create-profile3';

@Component({
  selector: 'page-create-profile2',
  templateUrl: 'create-profile2.html'
})
export class CreateProfile2 {
    

  constructor(public navCtrl: NavController) {
  }
  

  GoToCreate3(){
    this.navCtrl.push(CreateProfile3);
  }
}
