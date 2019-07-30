import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { PreguntasService } from './../services/preguntas.service';

@Component({
  selector: 'app-pantalla-final',
  templateUrl: './pantalla-final.component.html',
  styleUrls: ['./pantalla-final.component.css']
})
export class PantallaFinalComponent implements OnInit {

  constructor(
    public preguntas: PreguntasService,
    public router:    Router
  ) { }

  ngOnInit() {
  }

  reset(){
    this.preguntas.resetJuego();
    this.router.navigateByUrl('/');
  }

}
