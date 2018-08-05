import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { ServicesProvider } from '../../providers/services'
=======
import { ViewRequestInfo } from '../ViewRequestInfo/ViewRequestInfo';
import { ServicesProvider } from '../../providers/services';
>>>>>>> 44b6c1f122c2acabf104fccee344115c1a814d83
@Component({
  selector: 'page-ViewAnnualRequests',
  templateUrl: 'ViewAnnualRequests.html'
})
export class ViewAnnualRequests {
  requests: any = [];
  constructor(public navCtrl: NavController, private RequestsBE: ServicesProvider) {
    var username = localStorage.getItem("username");
    this.RequestsBE.ViewMyAnnualRequests(username).then((res: any) => {
      console.log(res)
      var length = (res.length) / 4;
      console.log(length);
      for (let i = 0; i < length; i++) {
        var request = {
          Type: res[4 * i],
          Date: res[4 * i + 1],
          RUsername: res[4 * i + 2],
          Status: res[4 * i + 3]
        }
        this.requests[i] = request
      }
    });
  }
<<<<<<< HEAD

}

=======
  GoToViewRequest(){
    this.navCtrl.push(ViewRequestInfo);
  }
  
}
>>>>>>> 44b6c1f122c2acabf104fccee344115c1a814d83
