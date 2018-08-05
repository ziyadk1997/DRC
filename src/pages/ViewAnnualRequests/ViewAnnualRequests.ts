import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { ServicesProvider } from '../../providers/services'
=======
import { ViewRequestInfo } from '../ViewRequestInfo/ViewRequestInfo';

>>>>>>> cc0091ce4d34450db445f3d01c607bfec2290406
@Component({
  selector: 'page-ViewAnnualRequests',
  templateUrl: 'ViewAnnualRequests.html'
})
export class ViewAnnualRequests {
  requests: any = [];
  constructor(public navCtrl: NavController, private RequestsBE: ServicesProvider) {
    var username = localStorage.getItem("username");
    this.RequestsBE.ViewMyCasualRequests(username).then((res: any) => {
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
>>>>>>> cc0091ce4d34450db445f3d01c607bfec2290406
