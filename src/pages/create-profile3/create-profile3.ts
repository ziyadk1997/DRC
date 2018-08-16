import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile1Page } from '../create-profile/create-profile';
import { CreateProfile4 } from '../create-profile4/create-profile4';
import { NavParams } from 'ionic-angular';
import { employer } from '../create-profile0/create-profile0';
import{skill} from '../create-profile0/create-profile0';



@Component({
  selector: 'page-create-profile3',
  templateUrl: 'create-profile3.html'
})
export class CreateProfile3 {
    
  newUserInfo=new employer();
  
  skill= new skill();
  SkillName:any;
  Profeciency:any;
  Interest:any;
  YearsOfExperience:any;

  constructor(public navCtrl: NavController , public navParams: NavParams) {
    this.newUserInfo=this.navParams.data;
    console.log(this.newUserInfo);
  }

  
  GoToCreate4(){
    this.skill.SkillName=this.SkillName;
    this.skill.Profeciency=this.Profeciency;
    this.skill.Interest=this.Interest;
    this.skill.YearsOfExperience=this.YearsOfExperience;
    this.newUserInfo.Skills.push(this.skill);
    console.log(this.newUserInfo);

    this.navCtrl.push(CreateProfile4,this.newUserInfo);
  }
  
}