import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../apply-leave/apply-leave';
import { Chart } from '../../assets/Chart.js';
import { Body } from '../../../node_modules/@angular/http/src/body';
import { AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services'
import { WelcomePage } from '../../pages/welcome/welcome';
import { ViewAnnualRequests } from '../ViewAnnualRequests/ViewAnnualRequests';
import { ViewSickRequests } from '../ViewSickRequests/ViewSickRequests';
import { ViewCasualRequests } from '../ViewCasualRequests/ViewCasualRequests';

@Component({
  selector: 'page-LeaveTracker',
  templateUrl: 'LeaveTracker.html'
})
export class LeaveTrackerPage {
  

  constructor(public navCtrl: NavController,private alertCtrl: AlertController, private RequestsBE: ServicesProvider) {
    
  }
  
  GoToApplyLeavePage(){

    this.navCtrl.push(ApplyLeavePage);
  }

  ionViewDidLoad()
  {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            label: 'OverAll',
            data: [87,0 ],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 255, 255,1)',
                'rgba(54, 162, 235, 1)',
                
            ],
            borderWidth:1
        }]
        
    },
    options: {
       
    }
});}
ViewMyAnnualRequests(){
    
    var username = localStorage.getItem("username");
    this.RequestsBE.ViewMyAnnualRequests(username).then(res => {
       console.log(res);
        // var array =  [] ;

        // requests = res;
        // if (res != null) {
        //  while(requests.next()){
        //     array.push(requests.getString("Reviewerusername"))
        //  }
        // } 
        // else {
          
        // }
      });
}
GoToAnnualRequests(){
    this.navCtrl.push(ViewAnnualRequests);
}
GoToSickRequests(){
    this.navCtrl.push(ViewSickRequests);
}
GoToCasualRequests(){
    this.navCtrl.push(ViewCasualRequests);
}

  
}
