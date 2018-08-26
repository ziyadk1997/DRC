import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';
import { AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add-new-skill',
  templateUrl: 'add-new-skill.html'
})
export class AddNewSkillPage {


  infos: any = {};
  NewSkillName:any;
  Profeciency:any;
  Interest:any;
  YearsOfExperience:any;

  constructor(public navCtrl: NavController , private RequestBE :ServicesProvider , private alertCtrl: AlertController , public navParams: NavParams) {
    this.infos = this.navParams.data;
  }
  AddSkill(){

    this.NewSkillName="";
    this.Profeciency="";
    this.Interest="";
    this.YearsOfExperience="";
    // this.navCtrl.push(AddNewSkillPage);
  }
  Save(){
    var userName = localStorage.getItem("username");
    this.RequestBE.AddNewSkill(this.infos.username, this.NewSkillName,this.Profeciency,this.Interest,this.YearsOfExperience).then (res => {
      if (res == true) {
        this.alertCtrl.create(
          {
            title: 'Skill added',
            subTitle: 'New skill added for this user ',
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
