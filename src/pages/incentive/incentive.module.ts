import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncentivePage } from './incentive';

@NgModule({
  declarations: [
    IncentivePage,
  ],
  imports: [
    IonicPageModule.forChild(IncentivePage),
  ],
})
export class IncentivePageModule {}
