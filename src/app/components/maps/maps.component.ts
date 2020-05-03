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

  infoContent = {
      title :'',
      imgUrl:'',
      desc:'',
      stock:''
  }
  markers = []
  zoom = 12
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
    this.searchService.searchStations().subscribe(resp => 
      resp.forEach(station => {
       
           this.markers.push({
            position: {
              lat: station.startPoint.latitude,
              lng: station.startPoint.longitude,
            },
           
            info: {
                    title: station.name ,
                    imgUrl: station.imageUrl,
                    desc: station.description,
                    stock: station.stock.length
            },
            title: 'BikePro', 
            options: {
                      animation: google.maps.Animation.DROP, 
                      icon: station.stock.length > 0 ? 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Ball-Chartreuse-icon.png' :
                      'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Ball-Pink-icon.png'
                      
                    },
           
          })
            })

    )
   
  }
  openInfo(marker: MapMarker, info) {
    this.infoContent = info;
    this.info.open(marker);
  }
  click(event: google.maps.MouseEvent) {

    console.log(JSON.stringify(event));
  }

  

}
