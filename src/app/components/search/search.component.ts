import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirect(routePath) {
    console.log('routePath', routePath);
    this.route.navigate([routePath]);
  }

}
