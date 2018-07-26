import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IssuesComplaintsPage } from './issues-complaints';

@NgModule({
  declarations: [
    IssuesComplaintsPage,
  ],
  imports: [
    IonicPageModule.forChild(IssuesComplaintsPage),
  ],
})
export class IssuesComplaintsPageModule {}
