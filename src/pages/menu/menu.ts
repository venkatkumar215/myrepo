import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';

export interface PageInterface{
  title:string;
  pageName:string;
  tabComponent?:any;
  index?:any;
  icon:string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
   rootPage ='TabsPage';
   @ViewChild( Nav ) nav: Nav;
   
   pages: PageInterface[]=[
     {title:'Profile',pageName:'ProfilePage',icon:'contact'},
     {title:'Feeds',pageName:'FeedsPage',icon:'list'},
     {title:'Notice Board',pageName:'NoticBoardPage',icon:'clipboard'},
     {title:'Order History',pageName:'OrderHistoryPage',icon:'reorder'},
     {title:'Incentive',pageName:'IncentivePage',icon:'disc'},
     {title:'Issues and Complaints',pageName:'IssuesComplaintsPage',icon:'alert'},
     {title:'Bank Details',pageName:'BankDetailsPage',icon:'logo-usd'},
     {title:'Legal',pageName:'LegalPage',icon:'list-box'},
     {title:'Stop Duty',pageName:'StopDutyPage',icon:'pause'},
     {title:'Logout',pageName:'LogoutPage',icon:'power'},
     {title:'Feedback',pageName:'FeedbackPage',icon:'paper'},
     {title:'Map',pageName:'MapPage',icon:'map'}

   ]   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  openPage(pages:PageInterface){

    this.navCtrl.push(pages.pageName)

  }
  isActive(){

  }
}
