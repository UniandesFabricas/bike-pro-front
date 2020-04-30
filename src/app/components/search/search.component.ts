import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../enums/products.enum';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ab-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchBicycle:boolean

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.searchBicycle = Products.Alquiler === environment.product;
  }

  redirect(routePath) {
    console.log('routePath', routePath);
    this.route.navigate([routePath]);
  }

}
