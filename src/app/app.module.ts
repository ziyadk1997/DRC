import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ItemDetailsPage } from '../pages/item-details/item-details';
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
import { FinancialPage} from '../pages/financial/financial';
import {ViewRequested} from '../pages/ViewRequested/ViewRequested';
import {RequestInfoPage} from '../pages/RequestInfoPage/RequestInfoPage';
import { ServicesProvider } from '../providers/services';
import { InterceptorModule } from '../providers/interceptor.module';
import {FundPage} from '../pages/fund/fund';
import {ReceiptClaimPage} from '../pages/receiptclaim/receiptclaim';
import {TravelExpensePage} from '../pages/travelexpense/travelexpense';
import {ViewAnnualRequests } from '../pages/ViewAnnualRequests/ViewAnnualRequests';
import {ViewSickRequests} from '../pages/ViewSickRequests/ViewSickRequests';
import {ViewCasualRequests} from '../pages/ViewCasualRequests/ViewCasualRequests';
import {ViewWorkFromHomeRequests} from '../pages/ViewWorkFromHomeRequests/ViewWorkFromHomeRequests';
import {CreateProfilePage} from '../pages/create-profile0/create-profile0';
import {CreateProfile2} from '../pages/create-profile2/create-profile2';
import {CreateProfile1Page} from '../pages/create-profile/create-profile';
import {CreateProfile3} from '../pages/create-profile3/create-profile3';
import { IonRating } from '../app/ion-rating/ion-rating';
import {CreateProfile4} from '../pages/create-profile4/create-profile4';
import {CreateProfile5} from '../pages/create-profile5/create-profile5';
import {CreateProfile6} from '../pages/create-profile6/create-profile6';
import {FCM} from '@ionic-native/fcm';
import {CreateProfile7Page} from '../pages/create-profile7/create-profile7';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
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
    AnnualRequestPage,
    FinancialPage,
    ViewRequested,
    RequestInfoPage,
    FundPage,
    ReceiptClaimPage,
    TravelExpensePage,
    ViewAnnualRequests,
    ViewSickRequests,
    ViewCasualRequests,
    ViewWorkFromHomeRequests,
    CreateProfilePage,
    CreateProfile2,
    CreateProfile1Page,
    CreateProfile3,
    IonRating ,
    CreateProfile4,
    CreateProfile5,
    CreateProfile6,
    CreateProfile7Page
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    InterceptorModule,
    IonicModule.forRoot(MyApp),
    
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
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
    AnnualRequestPage,
    FinancialPage,
    ViewRequested,
    RequestInfoPage,
    FundPage,
    ReceiptClaimPage,
    TravelExpensePage,
    ViewAnnualRequests,
    ViewSickRequests,
    ViewCasualRequests,
    ViewWorkFromHomeRequests,
    CreateProfilePage,
    CreateProfile2,
    CreateProfile1Page,
    CreateProfile3,
    IonRating ,
    CreateProfile4,
    CreateProfile5,
    CreateProfile6,
    CreateProfile7Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServicesProvider,
    FCM
  ]
})
export class AppModule {}