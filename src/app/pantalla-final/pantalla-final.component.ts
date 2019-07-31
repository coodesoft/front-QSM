import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { PreguntasService } from './../services/preguntas.service';

@Component({
  selector: 'app-pantalla-final',
  templateUrl: './pantalla-final.component.html',
  styleUrls: ['./pantalla-final.component.css']
})
export class PantallaFinalComponent implements OnInit {

  public gano:boolean    = false;
  public text_tit:string = 'PERDISTE';
  public text_des:string = 'SE NECESITABA CONTESTAR TODAS LAS PREGUNTAS BIEN';

  constructor(
    public preguntas: PreguntasService,
    public router:    Router
  ) { }

  ngOnInit() {
    this.gano = this.preguntas.gano_fase2 && this.preguntas.preguntaActual == 5;
    if (this.gano){
      this.text_tit = 'FELICIDADES, ¡GANASTE!';
      this.text_des = 'RETIRÁ TU PREMIO';
    }
  }

  reset(){
    this.preguntas.resetJuego();
    this.router.navigateByUrl('/');
  }

}
