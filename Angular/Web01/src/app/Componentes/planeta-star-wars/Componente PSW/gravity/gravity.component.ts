import {Component, OnInit, Input} from '@angular/core';
import {InterfacePlanetas} from "../../../../Interfaces/InterfacePlanetas";

@Component({
  selector: 'app-gravity',
  templateUrl: './gravity.component.html',
  styleUrls: ['./gravity.component.css']
})
export class GravityComponent implements OnInit {
  @Input() gravedadPlanet:InterfacePlanetas;
  constructor() { }

  ngOnInit() {
  }

}
