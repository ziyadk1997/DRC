import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../apply-leave/apply-leave';
import { Chart } from 'chart.js';
import { Body } from '../../../node_modules/@angular/http/src/body';

@Component({
  selector: 'page-LeaveTracker',
  templateUrl: 'LeaveTracker.html'
})
export class LeaveTrackerPage {
  

  constructor(public navCtrl: NavController) {
    
  }
  
  GoToApplyLeavePage(){

    this.navCtrl.push(ApplyLeavePage);
  }
  openHomepage(){
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad()
  {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["White", "Blue"],
        datasets: [{
            label: '# of Votes',
            data: [0,87 ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                
            ],
            borderWidth:1
            
        }]
    },
    options: {
       
    }
});}

  
}
