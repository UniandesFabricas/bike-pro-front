import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirect(routePath) {
    console.log('routePath', routePath);
    this.route.navigate([routePath]);
  }

}
