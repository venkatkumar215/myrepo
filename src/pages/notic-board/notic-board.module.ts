import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticBoardPage } from './notic-board';

@NgModule({
  declarations: [
    NoticBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticBoardPage),
  ],
})
export class NoticBoardPageModule {}
