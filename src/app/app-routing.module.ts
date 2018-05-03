import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { TournmentComponent } from './tournment/tournment.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'Home', component: HomepageComponent,
  children: [
    {    
        path: 'tournament',
        component: TournmentComponent,
    },]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
