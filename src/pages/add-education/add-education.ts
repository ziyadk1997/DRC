import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';
import { AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add-education',
  templateUrl: 'add-education.html'
})
export class AddEducationPage {
  
  infos:any={};
  SchoolOrUniversity:any;
  FieldOfStudy:any;
  Degree:any;
  Grade:any;
  Activities:any;

  constructor(public navCtrl: NavController,  private RequestBE :ServicesProvider , private alertCtrl: AlertController, public navParams: NavParams) {
    this.infos = this.navParams.data;

  }
  
  AddEducation(){
    // pushes data to backend and then clears the boxes
  }

  Save(){
    this.RequestBE.AddNewEducation(this.infos.username, this.SchoolOrUniversity,this.FieldOfStudy,this.Degree,this.Grade,this.Activities).then (res => {
      if (res == true) {
        this.alertCtrl.create(
          {
            title: 'Education added',
            subTitle: 'New Education added for this user ',
            buttons: ['Okay']
          }
        ).present()
        this.navCtrl.pop();
      } else {
        this.alertCtrl.create(
          {
            title: 'Request Submition failed',
            subTitle: 'Please fill request form correctly',
            buttons: ['Dismiss']
          }
        ).present()
      }
    });


  }
}
