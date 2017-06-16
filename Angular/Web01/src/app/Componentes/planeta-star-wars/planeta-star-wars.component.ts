import {Component, OnInit, Input} from '@angular/core';
import {InterfacePlanetas} from "../../Interfaces/InterfacePlanetas";

@Component({
  selector: 'app-planeta-star-wars',
  templateUrl: './planeta-star-wars.component.html',
  styleUrls: ['./planeta-star-wars.component.css']
})
export class PlanetaStarWarsComponent implements OnInit {
  @Input() planetas:InterfacePlanetas

  constructor() { }

  ngOnInit() {
    console.log(this.planetas)
  }

}
