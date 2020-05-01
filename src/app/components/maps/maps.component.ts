import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { SearchService } from '../../services/search-service/search.service'


@Component({
  selector: 'ab-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  infoContent = ''
  markers = []
  zoom = 14
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    //mapTypeId: 'ROADMAP',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    //maxZoom: 50,
    //minZoom: 8,
  }

  constructor(
    private searchService:SearchService) { }

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


  /**
   * Agrega marcadores al mapa
   */
  addMarker() {
    this.searchService.searchStations().forEach(station => {

      this.markers.push({
        position: {
          lat: station.startPoint.latitude,
          lng: station.startPoint.longitude,
        },
        label: {
          color: 'red',
          text: station.name,
        },
        title: station.name,
        info: station.description,
        options: { animation: google.maps.Animation.BOUNCE },
      })

});


  }

  click(event: google.maps.MouseEvent) {

    console.log(JSON.stringify(event));
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }

}
