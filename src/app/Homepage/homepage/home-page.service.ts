import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CityData } from '../../mockdata/mockCityData';
import { Objectstructure} from'../../mockdata/interfaceID'


@Injectable()
export class HomePageService {

  constructor() { }

  getCity(): Observable<Objectstructure[]> {
        return of(CityData);
  }

}
