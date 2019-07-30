import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Respuesta }  from './../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  public preguntas:any;
  public pLoaded:boolean       = false;
  public urlPreguntas:string   = 'assets/config/preguntas.json';
  public preguntaActual:number = -1;
  public comodines:any         = [{'e':true},{'e':true},{'e':false}];
  public ultima_respuesta:any;
  public respuestas_correctas  = 0;

  constructor(
    public http:   HttpClient
  ) {  }

  useComodin(c,p){
    switch(c){
      case 0:
      break;
      case 1:
      break;
      case 2:
        this.respuestas_correctas++;
        this.preguntaActual ++;
        this.ultima_respuesta.acertada = true; 
        return true;
      break;
    }
    return false;
  }

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

    if (this.preguntas[this.preguntaActual].t != 3 && this.preguntas[this.preguntaActual]['r-c'] == this.ultima_respuesta.opcion_elegida) { e = true; }

    if (e && this.preguntas[this.preguntaActual].t != 3) { this.respuestas_correctas++; }

    if (e && this.preguntas[this.preguntaActual].t == 3) { this.comodines[2].e = true; }

    r.acertada = e;
    return r;
  }
}
