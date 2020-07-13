import { Component, ViewChild, ElementRef } from '@angular/core';
import { } from '@agm/core';
import { marker } from './shared/marker.model';
import { MarkersService } from './services/markers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Initial settings for the map
  lat: number;
  lng: number;
  zoom: number = 11;
  mapType: string = 'terrain';
  markers: marker[];

  constructor(private markersService: MarkersService) { }

  ngOnInit() {
    this.getMarkers();
    this.initializeMap(this.markers[0]);
  }

  getMarkers() {
    this.markersService.getMarkers().subscribe(data => {
      this.markers = data;
    });
  }

  // Sets the center of the map
  initializeMap(data: marker) {
    this.lat = data.lat;
    this.lng = data.lng;

  }
}
