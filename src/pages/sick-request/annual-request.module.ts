import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnualRequestPage } from './annual-request';

@NgModule({
  declarations: [
    AnnualRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnualRequestPage),
  ],
})
export class AnnualRequestPageModule {}
