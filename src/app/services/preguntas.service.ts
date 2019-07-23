import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private preguntas:any;
  private pLoaded:boolean       = false;
  private urlPreguntas:string   = 'assets/config/preguntas.json';
  private preguntaActual:number = -1;
  private comodines:any         = [];

  constructor(
    private http:   HttpClient
  ) {  }

  getPreguntas(){
    if (this.pLoaded) { return this.preguntas; }

    this.http.get( this.urlPreguntas ).subscribe(
      data => { this.preguntas = data; return this.preguntas; },
      err  => { return false; }
    );
  }

  getSigPregunta(){
    this.preguntaActual ++;
    return this.preguntas[this.preguntaActual];
  }

  getComodines(){
    return this.comodines;
  }
}
