import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewSkillPage } from '../../pages/add-new-skill/add-new-skill';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-view-profile2',
  templateUrl: 'view-profile2.html'

})

export class ViewProfile2Page {
  infos: any = {};
  userName:any;
  name :any;
  isSearch : boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infos = this.navParams.data;
    this.userName=this.infos.username;
    this.name = localStorage.getItem("username");
    this.isUser();
    console.log(this.name);
    console.log(this.userName);
    console.log(this.isSearch);

  }
  AddNewSkill() {
    this.navCtrl.push(AddNewSkillPage);
  }
  isUser(){
    if(this.name != this.userName && this.userName!=null)
      this.isSearch =false;
    else
      this.isSearch = true;
  }
}
