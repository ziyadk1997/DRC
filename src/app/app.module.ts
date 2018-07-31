import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { ApplyLeavePage } from '../pages/apply-leave/apply-leave';
import { NewProfilePage } from '../pages/new-profile/new-profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewProfilePage } from '../pages/view-profile/view-profile';
import { ViewProfile2Page } from '../pages/view-profile2/view-profile2';
import { ViewProfile3Page} from '../pages/view-profile3/view-profile3';
import { ViewProfile4Page } from '../pages/view-profile4/view-profile4';
import { ViewProfile5Page } from '../pages/view-profile5/view-profile5';
import { ViewProfile6Page } from '../pages/view-profile6/view-profile6';
import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent , HttpClient } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AddNewSkillPage } from '../pages/add-new-skill/add-new-skill';
import { AddEducationPage } from '../pages/add-education/add-education';
import { AddLanguagePage } from '../pages/add-language/add-language';
import { AddWorkExperiencePage } from '../pages/add-work-experience/add-work-experience';
import { LeaveTrackerPage } from '../pages/LeaveTracker/LeaveTracker';
import { AnnualRequestPage} from '../pages/annual-request/annual-request';





@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage, 
    WelcomePage,
    ApplyLeavePage,
    NewProfilePage,
    LoginPage,
    ViewProfilePage,
    ViewProfile2Page,
    ViewProfile3Page,
    ViewProfile4Page,
    ViewProfile5Page,
    ViewProfile6Page,
    AddNewSkillPage,
    AddEducationPage,
    AddLanguagePage,
    AddWorkExperiencePage,
    LeaveTrackerPage,
    AnnualRequestPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage, 
    WelcomePage,
    ApplyLeavePage,
    NewProfilePage,
    LoginPage,
    ViewProfilePage,
    ViewProfile2Page,
    ViewProfile3Page,
    ViewProfile4Page,
    ViewProfile5Page,
    ViewProfile6Page,
    AddNewSkillPage,
    AddEducationPage,
    AddLanguagePage,
    AddWorkExperiencePage,
    LeaveTrackerPage,
    AnnualRequestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}