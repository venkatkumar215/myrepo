import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Objectstructure } from '../../mockdata/interfaceID';
import { HomePageService } from './home-page.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  //providers: [{ provide: NG_VALUE_ACCESSOR}]
})

export class HomepageComponent implements OnInit {

  locationForm: FormGroup;
  cityOptions : Objectstructure[];
  Cityplaceholder='City';
//  public cityOptions:any;


  constructor(private fb: FormBuilder,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private homePageService: HomePageService) {

    // iconRegistry.addSvgIcon(
    //   'thumbs-up',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/Images/hamburg.svg'));
    this.locationForm = fb.group({
      'city': [null, Validators.required],
      'area': [null, Validators.required]
    })
  }



  ngOnInit() {
    this.getCity();
  }

  getCity(){
    this.homePageService.getCity().subscribe(CityOptions => this.cityOptions = CityOptions);
  }


}
