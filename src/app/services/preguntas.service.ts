import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Respuesta }  from './../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private preguntas:any;
  private pLoaded:boolean       = false;
  private urlPreguntas:string   = 'assets/config/preguntas.json';
  private preguntaActual:number = -1;
  private comodines:any         = [];
  private ultima_respuesta:any;

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

  getNumberActual(){ return this.preguntaActual; }

  getComodines(){ return this.comodines; }

  setRespuesta(pr){  this.ultima_respuesta = pr; }

  getRespuesta() {
    let r:Respuesta = new Respuesta(this.preguntas[this.preguntaActual]);
    let e:boolean   = false;

    if (this.preguntas[this.preguntaActual].t == 3){;
        for (let c=0;c<this.preguntas[this.preguntaActual].opciones.length;c++){

          if (this.ultima_respuesta.k1.toLowerCase() == this.preguntas[this.preguntaActual].opciones[c].k1.toLowerCase()){
            for (let d=0;d<this.preguntas[this.preguntaActual].opciones[c].k2.length;d++){
              if (this.ultima_respuesta.k2.toLowerCase() == this.preguntas[this.preguntaActual].opciones[c].k2[d].toLowerCase()){
                e = true; break;
              }
            }
            break;
          }
        }
    }

    r.acertada = e;
    return r;
  }
}
