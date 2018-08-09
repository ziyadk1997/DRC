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
import { ViewWorkFromHomeRequests } from '../ViewWorkFromHomeRequests/ViewWorkFromHomeRequests';

@Component({
    selector: 'page-LeaveTracker',
    templateUrl: 'LeaveTracker.html'
})
export class LeaveTrackerPage {
    days: any = [];
    annual: any;
    casual: any;
    sick: any;
    total: any;
    constructor(public navCtrl: NavController, private alertCtrl: AlertController, private RequestsBE: ServicesProvider) {
        this.ViewMyDays();
    }

    GoToApplyLeavePage() {

        this.navCtrl.push(ApplyLeavePage);
    }
    ionViewDidLoad() {

    }

    ViewMyAnnualRequests() {

        var username = localStorage.getItem("username");
        this.RequestsBE.ViewMyCasualRequests(username).then(res => {

        });
    }
    GoToAnnualRequests() {
        this.navCtrl.push(ViewAnnualRequests);
    }
    GoToSickRequests() {
        this.navCtrl.push(ViewSickRequests);
    }
    GoToCasualRequests() {
        this.navCtrl.push(ViewCasualRequests);
    }
    GoToWorkFromHomeRequests() {
        this.navCtrl.push(ViewWorkFromHomeRequests);
    }
    ViewMyDays() {
        var username = localStorage.getItem("username");
        this.RequestsBE.ViewMyVacations(username).then((res: any) => {
            if (res != null) {
                this.days = res;
                this.annual = this.days[0];
                this.casual = this.days[1];
                this.sick = this.days[2];
                this.total = this.days[3];
                this.drawChart();
            }
        });
    }
    drawChart()
    {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            
            datasets: [{
                label: 'OverAll',
                data: [this.total,87-this.total],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 255, 255,1)',
                    'rgba(54, 162, 235, 1)',
                    
                ],
                borderWidth:7
                
            }]
            
        },
        options: {
            cutoutPercentage : 100
            
           
        }
    });
    }

}