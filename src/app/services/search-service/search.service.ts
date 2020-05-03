import { Injectable } from '@angular/core';
import { Stations } from '../../../assets/json/Stations'
import {HttpService} from '../http/http.service';
import {Observable, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpService: HttpService) { }



  public searchStations():Observable<any> { 
    return this.httpService.getRequestWithoutPar('search/station').map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
    

  }


}
