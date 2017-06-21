import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pagina22',
  templateUrl: './pagina22.component.html',
  styleUrls: ['./pagina22.component.css']
})
export class Pagina22Component implements OnInit {

  constructor(private router:Router,private rutaActiva:ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      params=>{
        console.log(params)
      })
  }

}
