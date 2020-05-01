import { Injectable } from '@angular/core';
import { Stations } from '../../../assets/json/Stations'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }



  public searchStations() {
    return Stations;

  }


}
