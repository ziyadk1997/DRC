import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-fund',
  templateUrl: 'fund.html'
})
export class FundPage {
requests :any;
  constructor(public navCtrl: NavController, private servicesprovider: ServicesProvider, private RequestBE: ServicesProvider, private alertCtrl: AlertController) {
  }
  GoBack(){
    this.navCtrl.pop();
  }
  ionViewDidLoad()
  {
    var username = localStorage.getItem("username");
    this.RequestBE.ViewMySalary(username).then((res: any) => {
      if(res!=null){
      this.requests = res;
    }});
  }
  
}
