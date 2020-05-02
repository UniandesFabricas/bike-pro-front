import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import { Posts } from '../../../assets/json/posts'

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private httpService: HttpService) { }

  getPosts() {
    console.log('req posts');
    /*return this.httpService.getRequestWithoutPar('post').map(
      response => {
        return response;
      }, error => {
        console.log(error);
        return Posts;
      }
    );*/
    return Posts;
  }
}
