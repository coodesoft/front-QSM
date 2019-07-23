import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Pregunta } from './../models/pregunta';

@Component({
  selector: 'app-vista-respuesta',
  templateUrl: './vista-respuesta.component.html',
  styleUrls: ['./vista-respuesta.component.css']
})
export class VistaRespuestaComponent implements OnInit {

  private pregunta:Pregunta = new Pregunta();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToPregunta(){
      this.router.navigateByUrl('/pregunta');
  }

}
