import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(protected http: HttpClient) { }

  baseUrl = environment.urlBack;

  postJsonWhithoutCredentials(url, data): Observable<HttpResponse<string>> {
    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post<string>(this.baseUrl + url, data,
        {
          headers: httpHeaders,
          observe: 'response'
        }
    );
  }

  postJson(url, data): Observable<HttpResponse<string>> {
    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post<string>(this.baseUrl + url, data,
        {
          headers: httpHeaders,
          withCredentials: true,
          observe: 'response'
        }
    );
  }

  getRequest(url, data): Observable<any> {
    return this.http.get(this.baseUrl + url + '?' + this.listParams(data), { withCredentials: true } );
  }

  getRequestWhithoutCredentials(url, data): Observable<any> {
    return this.http.get(this.baseUrl + url + '?' + this.listParams(data));
  }

  getRequestWithoutPar(url): Observable<any> {
    return this.http.get(this.baseUrl + url , { withCredentials: true } );
  }

  getRequestWithoutParamAndCredentials(url): Observable<any> {
    return this.http.get(this.baseUrl + url );
  }

  listParams(data) {
    if (data === '') {
        return '';
    } else {
        return Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');
    }
  }
}
