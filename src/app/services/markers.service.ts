import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { marker } from '../shared/marker.model';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {
  markers: marker[] = [
    {
      animation: 'bounce',
      draggable: false,
      lat: 49.220,
      lng: -122.773,
      opacity: 1,
      title: 'Florist',
      label: 'F'
    },
    {
      draggable: true,
      lat: 49.204,
      lng: -122.836,
      opacity: 0.63,
      title: 'Resort'
    },
    {
      animation: 'drop',
      draggable: true,
      lat: 49.191,
      lng: -122.762,
      title: 'Nursery'
    },
    {
      draggable: true,
      lat: 49.248,
      lng: -122.797,
      opacity: 1,
      title: 'Auto Repair'
    },
    {
      animation: 'drop',
      draggable: false,
      label: 'B',
      lat: 49.213,
      title: 'Bank',
      lng: -122.673
    },
    {
      draggable: true,
      lat: 49.180,
      lng: -122.823,
      opacity: 1,
      title: 'Outlet',
      label: 'O'
    },
    {
      animation: 'bounce',
      draggable: false,
      lat: 49.294,
      lng: -122.741,
      opacity: 1,
      title: 'Barber Shop',
      label: 'BS'
    },
    {
      draggable: false,
      lat: 49.264,
      lng: -122.944,
      opacity: 1,
      title: 'Bazaar',
      label: 'Z'
    },
    {
      animation: 'drop',
      draggable: false,
      lat: 49.138,
      lng: -122.913,
      opacity: 1,
      title: 'Circus',
      label: 'C'
    },
    {
      draggable: false,
      lat: 49.218,
      lng: -122.626,
      title: 'Candy Shop',
      label: 'C'
    },
    {
      animation: 'bounce',
      draggable: true,
      lat: 49.174,
      lng: -122.678,
      title: 'Hardware Store',
      label: 'H'
    },
    {
      animation: 'bounce',
      draggable: false,
      lat: 49.191,
      lng: -122.906,
      opacity: 0.77,
      title: 'Pharmacy',
      label: 'P'
    },
    {
      animation: 'drop',
      draggable: true,
      lat: 49.196,
      lng: -122.849,
      opacity: 0.91,
      title: 'Boutique'
    },
    {
      draggable: false,
      lat: 49.260,
      lng: -122.963,
      opacity: 1,
      title: 'Pawn Shop'
    },
    {
      draggable: false,
      lat: 49.279,
      lng: -122.798,
      opacity: 1,
      title: 'Library',
      label: 'L'
    }
  ];

  constructor() { }

  getMarkers() {
    return of(this.markers);
  }
}
