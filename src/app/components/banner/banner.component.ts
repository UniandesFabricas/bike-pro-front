import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ab-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  title:string;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.title = environment.product;

  }

  goHome() {
    this.route.navigate(['']);
  }

}
