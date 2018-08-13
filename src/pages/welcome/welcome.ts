import { Component } from '@angular/core';
import { Platform,NavController,NavParams } from 'ionic-angular';
import { ApplyLeavePage } from '../../pages/apply-leave/apply-leave';
import { ViewProfilePage } from '../../pages/view-profile/view-profile';
import { LeaveTrackerPage } from '../LeaveTracker/LeaveTracker';
import { LoginPage } from '../login/login';
import { FinancialPage } from '../../pages/financial/financial';
import { ViewRequested } from '../../pages/ViewRequested/ViewRequested';
import { TravelExpensePage } from '../travelexpense/travelexpense';
import { CreateProfilePage } from '../create-profile0/create-profile0';
import { ServicesProvider } from '../../providers/services';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  IsHr: boolean = false;
  IsOwner: boolean = false;
  IsAdmin: boolean = false;
  IsManager: boolean = false;
  MyInput: any = "";
  Employees: any = [];
  isSearching:boolean = false;
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider,private navparams:NavParams ,private platform:Platform ) {
    this.SetHr();
    this.SetManager();
    this.SetOwner();
    this.SetAdmin();
  }





  onCancel(){
    this.isSearching=false;
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
  SetAdmin() {
    var username = localStorage.getItem("username");
    this.RequestBE.IsAdmin(username).then((res) => {
      if (res.toString() == "false") {
        this.IsAdmin = false;
      } else {
        this.IsAdmin = true;
      }
    });
  }
  SetOwner() {
    var username = localStorage.getItem("username");
    this.RequestBE.IsOwner(username).then((res) => {
      if (res.toString() == "false") {
        this.IsOwner = false;
      } else {
        this.IsOwner = true;
      }
    });
  }
  SetManager() {
    var username = localStorage.getItem("username");
    this.RequestBE.IsManager(username).then((res) => {
      if (res.toString() == "false") {
        this.IsManager = false;
      } else {
        this.IsManager = true;
      }
    });
  }


  GoBack() {

    this.navCtrl.pop();
  }
  GoLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

  GoToleaveTrackerPage() {
    var username = localStorage.getItem("username");
    this.navCtrl.push(LeaveTrackerPage);

  }
  GoToProfilePage() {
    this.navCtrl.push(ViewProfilePage,localStorage.getItem("username"));
  }
  ViewDetails(username){
    this.navCtrl.push(ViewProfilePage,username);
  }
  GoToFinancialPage() {
    this.navCtrl.push(FinancialPage);
  }
  GoToRequestsPage() {
    this.navCtrl.push(ViewRequested);
  }
  GoToTravelExpensePage() {
    this.navCtrl.push(TravelExpensePage);

  }
  GoToCreatePage() {
    this.navCtrl.push(CreateProfilePage);
  }
  GetAllEmployees() {
    if(this.MyInput !=''){
    this.isSearching = true;
    }else{
      this.isSearching=false;
    }
    this.RequestBE.GetAllEmployees().then((res: any) => {
      this.Employees=res.filter((item) => {return item.name.toLowerCase().indexOf(this.MyInput.toLowerCase()) > -1; })
      })
  }
  
}
