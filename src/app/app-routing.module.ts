import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { TournmentComponent } from './tournment/tournment.component';
import {MainhomepageComponent }  from './Homepage/mainhomepage/mainhomepage.component';
const routes: Routes = [
 { path: '', redirectTo:'Home',
 pathMatch: 'full' },
  { path: 'Home', component: HomepageComponent,
  children: [
  {  path: '',redirectTo:'MainHomePage',
  pathMatch: 'full'},
  {    
    path: 'MainHomePage',
    component: MainhomepageComponent,
},
    {    
        path: 'tournament',
        component: TournmentComponent,
    },
   
  
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
