import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'


@Component({
  selector: 'ab-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  infoContent = ''
  markers = []
  zoom = 15
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    //mapTypeId: 'ROADMAP',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    //maxZoom: 50,
    //minZoom: 8,
  }

  constructor() { }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition(position => {
      console.log('lat: ', position.coords.latitude);
      console.log('log: ', position.coords.longitude);
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    this.addMarker();
  }


  addMarker() {
    this.markers.push({
      position: {
        lat: 4.6399488,
        lng: -74.0622336,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }

  click(event: google.maps.MouseEvent) {
    console.log(event)
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }

}
