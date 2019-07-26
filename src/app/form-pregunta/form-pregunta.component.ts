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

  getTextSizeOp(t){
    let s ='25px';
    if (String(t).length > 35){ s='24px'; }
    if (String(t).length > 46){ s='20px'; }
    return s;
  }

  getTextSizeTit(t){
    let s = '45px';
    if (String(t).length > 50){ s='30px'; }
    if (String(t).length > 90){ s='25px'; }
    return s;
  }

  setRespuesta(n){
    this.pregunta.opcion_elegida = n;
    this.goToRespuesta();
  }

}
