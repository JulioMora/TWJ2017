import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pagina23',
  templateUrl: './pagina23.component.html',
  styleUrls: ['./pagina23.component.css']
})
export class Pagina23Component implements OnInit {

  constructor(private router:Router,private rutaActiva:ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      params=>{
        console.log(params)
      })
  }
}
