import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ab-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  comunidad_compartirRuta:boolean
  comunidad_compartirEvento:boolean
  comunidad_muroPublicaciones:boolean



  constructor() { }

  ngOnInit(): void {
    this.comunidad_compartirRuta = environment.comunidad_compartirRuta;
    this.comunidad_compartirEvento = environment.comunidad_compartirEvento;
    this.comunidad_muroPublicaciones = environment.comunidad_muroPublicaciones;
  }

}
