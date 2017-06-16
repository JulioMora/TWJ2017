import {Component, OnInit, Input} from '@angular/core';
import {InterfacePlanetas} from "../../../../Interfaces/InterfacePlanetas";

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {
  @Input() climatePlanet:InterfacePlanetas;
  constructor() { }

  ngOnInit() {
  }

}
