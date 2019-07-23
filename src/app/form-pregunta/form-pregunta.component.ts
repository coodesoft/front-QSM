import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Pregunta } from './../models/pregunta';

@Component({
  selector: 'app-form-pregunta',
  templateUrl: './form-pregunta.component.html',
  styleUrls: ['./form-pregunta.component.css']
})
export class FormPreguntaComponent implements OnInit {

  private pregunta:Pregunta = new Pregunta();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToRespuesta(){
    this.router.navigateByUrl('/respuesta');
  }

}
