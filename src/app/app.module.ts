import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { SwiperModule } from 'angular2-useful-swiper';


import { AppComponent } from './app.component';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import{ CoreModule} from './core/core.module';
import { SharedModule} from './shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './CommonUi/dropdown/dropdown.component';
import { HomePageService } from './Homepage/homepage/home-page.service';
import { TournmentComponent } from './tournment/tournment.component';
import { LeftnavHeaderComponent } from './CommonUi/leftnav-header/leftnav-header.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DropdownComponent,
    TournmentComponent,
    LeftnavHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,BrowserAnimationsModule,
    SwiperModule,
    NgbModule.forRoot()
  ],
  providers: [HomePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
