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

  busqueda_bicicletas:boolean
  busqueda_rutasCompartidas:boolean
  busqueda_eventosPrivados:boolean

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.busqueda_bicicletas = environment.busqueda_bicicletas;
    this.busqueda_rutasCompartidas = environment.busqueda_rutasCompartidas;
    this.busqueda_eventosPrivados = environment.busqueda_eventosPrivados;
  }

  redirect(routePath) {
    console.log('routePath', routePath);
    this.route.navigate([routePath]);
  }

}
