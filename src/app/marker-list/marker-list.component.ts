import { Component, OnInit, Input } from '@angular/core';
import { marker } from '../shared/marker.model';

@Component({
  selector: 'app-marker-list',
  templateUrl: './marker-list.component.html',
  styleUrls: ['./marker-list.component.css']
})
export class MarkerListComponent implements OnInit {
  @Input() markers: marker[];

  constructor() { }

  ngOnInit() {
  }

}
