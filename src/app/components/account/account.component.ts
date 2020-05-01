import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ab-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  showAll = true;
  inscripcion_registro:boolean
  inscripcion_autenticacion:boolean
  inscripcion_pagos:boolean

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.showAll = sessionStorage.getItem('userAuth') !== undefined && sessionStorage.getItem('userAuth') !== null
     && sessionStorage.getItem('userAuth') === 'true' ? false : true;
    this.inscripcion_registro = environment.inscripcion_registro;
    this.inscripcion_autenticacion = environment.inscripcion_autenticacion;
    this.inscripcion_pagos = environment.inscripcion_pagos;
  }

  redirect(routePath) {
    this.route.navigate([routePath]);
  }

}
