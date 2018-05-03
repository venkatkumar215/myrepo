import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tournment',
  templateUrl: './tournment.component.html',
  styleUrls: ['./tournment.component.css']
})
export class TournmentComponent implements OnInit {

  images: Array<string>;

  constructor(config: NgbCarouselConfig,private _http: HttpClient) {
    config.interval = 100000;
    config.wrap = true;
   }

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
      .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
      .subscribe(images => this.images = images);
  }

  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
}