import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile6 } from '../create-profile6/create-profile6';
import { NavParams } from 'ionic-angular';
import { employer } from '../create-profile0/create-profile0';
import { Language } from '../create-profile0/create-profile0';



@Component({
  selector: 'page-create-profile5',
  templateUrl: 'create-profile5.html'
})
export class CreateProfile5 {
  newUserInfo=new employer();
  NewLanguage= new Language();
  
  LanguageName:any;
  Reading:any;
  Writing:any;
  Listening:any;
  Speaking:any;
  Justification:any;

  constructor(public navCtrl: NavController , public navParams: NavParams) {
    this.newUserInfo=this.navParams.data;
    console.log(this.newUserInfo);
  }
  GoToCreate6(){
    this.NewLanguage.LanguageName=this.LanguageName;
    this.NewLanguage.Reading=this.Reading;
    this.NewLanguage.Writing=this.Writing;
    this.NewLanguage.Listening=this.Listening;
    this.NewLanguage.Speaking=this.Speaking;
    this.NewLanguage.Justification=this.Justification;

    this.newUserInfo.Languages.push(this.NewLanguage);

    console.log(this.newUserInfo);

    this.navCtrl.push(CreateProfile6 , this.newUserInfo);
  }
}
