import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewRequested } from '../ViewRequested/ViewRequested';
import { ServicesProvider } from '../../providers/services';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-RequestInfoPage',
  templateUrl: 'RequestInfoPage.html'
})
export class RequestInfoPage {
  requests: any = [];
  requestid: any;
  comment : any;
  IsManager : boolean = false;
  IsOwner : boolean = false;
  IsAdmin : boolean = false;
  constructor(public navCtrl: NavController, private navparams: NavParams, private alertCtrl: AlertController, private RequestBE: ServicesProvider) {
    this.requestid = this.navparams.data.reqId;
    console.log(this.requestid)
  this.SetManager();
  this.SetOwner();
  this.SetAdmin();
  }
  GoToRequestsPage() {


  }
  SetAdmin(){
    var username = localStorage.getItem("username");
    this.RequestBE.IsAdmin(username).then((res) => {
      if(res.toString() == "false"){
        this.IsAdmin=false;
      }else{
        this.IsAdmin=true;
      }
    });
  }
  SetOwner(){
    var username = localStorage.getItem("username");
    this.RequestBE.IsOwner(username).then((res) => {
      if(res.toString() == "false"){
        this.IsOwner=false;
      }else{
        this.IsOwner=true;
      }
    });
  }
  SetManager(){
    var username = localStorage.getItem("username");
    this.RequestBE.IsManager(username).then((res) => {
      if(res.toString() == "false"){
        this.IsManager=false;
      }else{
        this.IsManager=true;
      }
    });
  }
 
  ionViewDidLoad() {
    
    var username = localStorage.getItem("username");
    this.RequestBE.ViewRequestbyId(this.requestid).then((res: any) => {
      if (res != null) {
        this.requests = res;
      }
    });
  }
  AcceptRequest() {
    var username = localStorage.getItem("username");
    this.RequestBE.ApproveRequest(username, this.requestid).then((res: any) => {
      if (res == true) {
        this.navCtrl.setRoot(ViewRequested);
      } else {
        this.alertCtrl.create(
          {
            title: 'Operation Failed',
            subTitle: 'Wrong username or password',
            buttons: ['Dismiss']
          }
        ).present()
      }
    });
  }

  RejectRequest() {
    var username = localStorage.getItem("username");
    if(this.comment!=null){
    this.RequestBE.RejectRequest(username, this.requestid,this.comment).then((res: any) => {
      if (res == true) {
        this.navCtrl.setRoot(ViewRequested);
      } else {
        this.alertCtrl.create(
          {
            title: 'Operation Failed',
            subTitle: 'Wrong username or password',
            buttons: ['Dismiss']
          }
        ).present()
      }
    });
  }
  else{
    this.alertCtrl.create(
      {
        title: 'Rejection Failed',
        subTitle: 'Please enter cause for rejection',
        buttons: ['Dismiss']
      }
    ).present()
  }
  }

}
