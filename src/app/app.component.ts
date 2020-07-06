import { Component, ViewChild, ElementRef } from '@angular/core';
import { } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Initial settings for the map
  lat: number;
  lng: number;
  zoom: number = 12;
  mapType: string = 'terrain';

  constructor() {
    this.initializeMap(this.markers[0]);
  }

  // Sets the center of the map
  initializeMap(data: marker) {
    this.lat = data.lat;
    this.lng = data.lng;

  }
  markers: marker[] = [
    {
      animation: 'bounce',
      draggable: false,
      lat: 49.220,
      lng: -122.773,
      opacity: 1,
      title: 'Random',
      label: 'Y'
    },
    {
      draggable: true,
      lat: 49.204,
      lng: -122.836,
      opacity: 0.63,
      title: 'Bakery'
    },
    {
      animation: 'drop',
      draggable: true,
      lat: 49.191,
      lng: -122.762,
    },
    {
      draggable: true,
      lat: 49.248,
      lng: -122.797,
      opacity: 1,
      title: 'Store'
    },
    {
      animation: 'drop',
      draggable: false,
      label: 'R',
      lat: 49.213,
      lng: -122.673
    },
  ]; 
}

interface marker {
  animation?: string,
  draggable: boolean, 
  label?: string,
  lat: number,
  lng: number,
  opacity?: number,
  title?: string
}
