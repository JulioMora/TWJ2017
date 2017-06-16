import {Component, OnInit, Input} from '@angular/core';
import {InterfacePlanetas} from "../../../../Interfaces/InterfacePlanetas";

@Component({
  selector: 'app-diameter',
  templateUrl: './diameter.component.html',
  styleUrls: ['./diameter.component.css']
})
export class DiameterComponent implements OnInit {
  @Input() diameterPlanet:InterfacePlanetas;
  constructor() { }

  ngOnInit() {
  }

}
