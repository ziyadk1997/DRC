import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewSkillPage } from '../../pages/add-new-skill/add-new-skill';
import { NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';

@Component({
  selector: 'page-view-profile2',
  templateUrl: 'view-profile2.html'

})

export class ViewProfile2Page {
  infos: any = {};
  userName:any;
  name :any;
  isSearch : boolean;
  IsHr:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams , private RequestBE :ServicesProvider) {
    this.infos = this.navParams.data;
    this.userName=this.infos.username;
    this.name = localStorage.getItem("username");
    this.isUser();
    this.SetHr();

  }
  AddNewSkill() {
    this.navCtrl.push(AddNewSkillPage,this.infos);
  }
  SetHr() {
    var username = localStorage.getItem("username");
    this.RequestBE.IsHr(username).then((res) => {
      if (res.toString() == "false") {
        this.IsHr = false;
      } else {
        this.IsHr = true;
      }
    });
  }
  isUser(){
    if(this.name != this.userName && this.userName!=null)
      this.isSearch =false;
    else
      this.isSearch = true;
  }
}
