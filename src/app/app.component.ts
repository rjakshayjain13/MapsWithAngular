import { Component, ViewChild, ElementRef } from '@angular/core';
import { } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 49.220;
  lng: number = -122.773;
  zoom: number = 12;

  constructor() {}
}
