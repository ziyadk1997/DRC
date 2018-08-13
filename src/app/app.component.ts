import { Component, ViewChild } from '@angular/core';
import { Platform,Nav, MenuController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public fcm :FCM
  ) {
    this.initializeApp();
    this.pages = [
      // { title: 'Hello Ionic', component: HelloIonicPage },
      // { title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //Notifications
      
      this.fcm.subscribeToTopic('all');
      this.fcm.getToken().then(token=>{
          console.log(token);
      })
      this.fcm.onNotification().subscribe(data=>{
        if(data.wasTapped){
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
        };
      })
      this.fcm.onTokenRefresh().subscribe(token=>{
        console.log(token);
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
