import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GESTURE_PRIORITY_TOGGLE } from 'ionic-angular/gestures/gesture-controller';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var google:any;  
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapRef:ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 ionViewDidLoad(){
   this.DisplayMap();
 }

//  var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }

DisplayMap(){

  const lat='13.0827';
  const lng='80.2707';
  const location= new google.maps.LatLng(lat,lng);
  const options={ 
    center: location,
         zoom: 12,
         streetViewControl:true,
         mapTypeId:'roadmap'
  }
  const map= new google.maps.Map(this.mapRef.nativeElement,options);

this.addMarker(location,map);
}

addMarker(position,map){
return new google.maps.Marker({
  position,map
})
}



}
