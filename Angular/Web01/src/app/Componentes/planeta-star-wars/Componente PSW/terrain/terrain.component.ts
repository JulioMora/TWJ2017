import {Component, OnInit, Input} from '@angular/core';
import {InterfacePlanetas} from "../../../../Interfaces/InterfacePlanetas";

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
  @Input() terrenoPlanet:InterfacePlanetas
  constructor() { }

  ngOnInit() {
  }

}
