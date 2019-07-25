import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Pregunta } from './../models/pregunta';
import { PreguntasService } from './../services/preguntas.service';

@Component({
  selector: 'app-form-pregunta',
  templateUrl: './form-pregunta.component.html',
  styleUrls: ['./form-pregunta.component.css']
})
export class FormPreguntaComponent implements OnInit {

  public pregunta:Pregunta = new Pregunta();
  public pregunta_actual:number = 0;

  constructor(
    public router:    Router,
    public preguntas: PreguntasService
  ) { }

  ngOnInit() {
    this.pregunta        = new Pregunta(this.preguntas.getSigPregunta());
    this.pregunta_actual = this.preguntas.getNumberActual();
  }

  goToRespuesta(){

    if (this.pregunta.isValid()){
      this.preguntas.setRespuesta(this.pregunta);
      this.router.navigateByUrl('/respuesta');
    } else {
      alert(this.pregunta.getErrors());
    }
  }

  setRespuesta(n){
    this.pregunta.opcion_elegida = n;
    this.goToRespuesta();
  }

}
