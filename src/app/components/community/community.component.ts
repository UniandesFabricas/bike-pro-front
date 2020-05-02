import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  comunidad_compartirRuta:boolean
  comunidad_compartirEvento:boolean
  comunidad_muroPublicaciones:boolean



  constructor(private route: Router) { }

  ngOnInit(): void {
    this.comunidad_compartirRuta = environment.comunidad_compartirRuta;
    this.comunidad_compartirEvento = environment.comunidad_compartirEvento;
    this.comunidad_muroPublicaciones = environment.comunidad_muroPublicaciones;
  }

  redirect(routePath) {
    this.route.navigate([routePath]);
  }

}
