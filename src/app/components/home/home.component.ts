import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user-service/user.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comunidad:boolean

  constructor(private route: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.comunidad = environment.comunidad;

  }

  redirect(routePath) {
    console.log('routePath', routePath);
    this.route.navigate([routePath]);
  }

}
