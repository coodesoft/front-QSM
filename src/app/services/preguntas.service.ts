import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Respuesta }     from './../models/respuesta';
import { Pregunta }      from './../models/pregunta';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  public preguntas:any         = [];
  public pLoaded:boolean       = false;
  public urlPreguntas:string   = 'assets/config/preguntas.json';
  public preguntaActual:number = -1;
  public comodines:any         = [{'e':true, 'a':false},{'e':true, 'a':false, 'x':'70px', 'y':'819px'},{'e':false}];
  public ultima_respuesta:any;
  public respuestas_correctas  = 0;
  public position_ini_opc      = [{'x':70,'y':819},{'x':980,'y':818},{'x':70,'y':940},{'x':980,'y':940}];
  public gano_fase1:boolean    = false;
  public gano_fase2:boolean    = false;

  private bolsa_preguntas:any;
  private arr_preguntas:any;
  private pos_azar:number = 3;  //indica el numero de pregunta sobre el cual se saca una al azar de la bolsa de preguntas

  constructor(
    public http:    HttpClient,
    public configs: ConfigService
  ) {  }

  resetJuego(){
    this.comodines            = [{'e':true, 'a':false},{'e':true},{'e':false}];
    this.preguntaActual       = -1;
    this.respuestas_correctas = 0;
  }

  useComodin(c,p){
    this.comodines[c].e = false;

    switch(c){
      case 0: //50:50
        let n  = Math.floor(Math.random() * (20 - 0));
        let o  = 'naana batman!';
        let a1 = [];
        for (let j=0; j < this.preguntas[this.preguntaActual].opciones.length; j++){
          if (j != this.preguntas[this.preguntaActual]['r-c']){ a1.push(this.preguntas[this.preguntaActual].opciones[j]); }
        }
        o = a1[Math.floor(Math.random() * (2 - 0))];

        this.comodines[c].a = true;
        if (n >10) {
          p.opciones = [{'e':true, 't':this.preguntas[this.preguntaActual].opciones[this.preguntas[this.preguntaActual]['r-c']]},
                        {'e':true, 't':o}];
          this.preguntas[this.preguntaActual]['r-c']=0;
        } else {
          p.opciones = [{'e':true, 't':o},
                        {'e':true, 't':this.preguntas[this.preguntaActual].opciones[this.preguntas[this.preguntaActual]['r-c']]}];
          this.preguntas[this.preguntaActual]['r-c']=1;
        }
      break;

      case 1: //"la gente"
        this.comodines[c].a = true;
        let aux             = Number(this.preguntas[this.preguntaActual]['r-c']);
        if ( Math.floor(Math.random() * (100 - 0)) > this.configs.config.comodines.porc_comodin_gente ){
          for (let j=0; j < 4; j++){
            let aux2 = Math.floor(Math.random() * (3 - 0));
            if (aux2 != aux) { aux = aux2; break; }
          }
        }
        this.comodines[c].x = this.position_ini_opc[aux].x+'px';
        this.comodines[c].y = this.position_ini_opc[aux].y+'px';
      break;

      case 2: //Respuesta correcta
        this.ultima_respuesta.opcion_elegida = this.preguntas[this.preguntaActual]['r-c'];
        return true;
      break;
    }
    return false;
  }

  cargar_bolsa(){ //las preguntas de tipo 4 y no usadas se guardan en la bolsa
    this.bolsa_preguntas = [];
    for (let c=0; c < this.arr_preguntas.length;c++){
      if (this.arr_preguntas[c].t == 4){ this.bolsa_preguntas.push(this.arr_preguntas[c]); }
    }
  }

  cargar_preguntas(){
    for (let c=0; c < this.arr_preguntas.length;c++){
      if (this.arr_preguntas[c].t != 4){ this.preguntas.push(this.arr_preguntas[c]); }
    }
    this.cargar_bolsa();
  }

  getPreguntas(){
    if (this.pLoaded) { return this.preguntas; }

    this.configs.getConfig();

    this.http.get( this.urlPreguntas ).subscribe(
      data => { this.arr_preguntas = data; this.cargar_preguntas(); this.pLoaded = true; return this.preguntas; },
      err  => { return false; }
    );
  }

  getSigPregunta(){
    this.preguntaActual ++;
    if (this.preguntaActual > this.pos_azar){
      let n  = Math.floor(Math.random() * (this.bolsa_preguntas.length - 0));
      this.preguntas[this.preguntaActual] = this.bolsa_preguntas[n];
      this.bolsa_preguntas.splice(n,1);
    }
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

    this.gano_fase1 = this.respuestas_correctas == 3 && this.preguntaActual == 3;
    this.gano_fase2 = this.respuestas_correctas == 5 && this.preguntaActual == 5;

    this.comodines[0].a = false;
    this.comodines[1].a = false;
    r.acertada          = e;
    return r;
  }
}
