import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile2 } from '../create-profile2/create-profile2';
import { CreateProfile1Page } from '../create-profile/create-profile';

@Component({
  selector: 'page-create-profile0',
  templateUrl: 'create-profile0.html'
})
export class CreateProfilePage {

  constructor(public navCtrl: NavController) {
  }
  GoToProfile2(){
    this.navCtrl.push(CreateProfile1Page);
  }
  
}
