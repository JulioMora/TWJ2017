import {Component, OnInit, Input} from '@angular/core';
import {InterfacePlanetas} from "../../../../Interfaces/InterfacePlanetas";

@Component({
  selector: 'app-orbital-period',
  templateUrl: './orbital-period.component.html',
  styleUrls: ['./orbital-period.component.css']
})
export class OrbitalPeriodComponent implements OnInit {
  @Input() periodoOrbitalPlanet:InterfacePlanetas;
  constructor() { }

  ngOnInit() {
  }

}
