import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  createUser(jsonRequest): Observable<any> {
    console.log('user json', jsonRequest);
    return this.httpService.postJsonWhithoutCredentials('person', jsonRequest).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }

  login(data): Observable<any> {
    const dataSend = {
      username: 'emantilla',
      password: 'prueba'
    };
    return this.httpService.postJson('login', dataSend).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }
}

