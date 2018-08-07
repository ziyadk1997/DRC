import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile1Page } from '../create-profile/create-profile';

@Component({
  selector: 'page-create-profile2',
  templateUrl: 'create-profile2.html'
})
export class CreateProfile2 {
    

  constructor(public navCtrl: NavController) {
  }
  
  GoToProfile1(){
    this.navCtrl.push(CreateProfile1Page);
  }
}
