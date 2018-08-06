import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewProfile2Page } from '../../pages/view-profile2/view-profile2';
import { ViewProfile3Page } from '../../pages/view-profile3/view-profile3';
import { ViewProfile4Page } from '../../pages/view-profile4/view-profile4';
import { ViewProfile5Page } from '../../pages/view-profile5/view-profile5';
import { ViewProfile6Page } from '../../pages/view-profile6/view-profile6';
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html'
})
export class ViewProfilePage {
  option: any;
  constructor(public navCtrl: NavController) {

  }
  GoBack() {

    this.navCtrl.pop();
  }
  GoToSkills() {
    this.navCtrl.push(ViewProfile2Page);
  }
  GoToWorkExperience() {
    this.navCtrl.push(ViewProfile3Page);
  }
  GoToEducation() {
    this.navCtrl.push(ViewProfile4Page);
  }
  GoToLanguage() {
    this.navCtrl.push(ViewProfile5Page);
  }
  GoToAttachments() {
    this.navCtrl.push(ViewProfile6Page);
  }

  UploadImage() {
    console.log("yala ya wad ya wel3a");
  }

}
