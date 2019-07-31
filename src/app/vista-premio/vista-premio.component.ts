import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { PreguntasService } from './../services/preguntas.service';

@Component({
  selector: 'app-vista-premio',
  templateUrl: './vista-premio.component.html',
  styleUrls: ['./vista-premio.component.css']
})
export class VistaPremioComponent implements OnInit {

  public gano:boolean = false;
  public text_tit:string = 'PERDISTE';
  public text_des:string = 'SE NECESITABA CONTESTAR LAS 3 PREGUNTAS CORRECTAMENTE';

  constructor(
    public preguntas: PreguntasService,
    public router:    Router
  ) { }

  ngOnInit() {
    this.gano = this.preguntas.gano_fase1 && this.preguntas.preguntaActual == 3;
    if (this.gano){
      this.text_tit = '¡GANASTE!';
      this.text_des = 'PODÉS RETIRAR TU PREMIO O SEGUIR AL PREMIO MAYOR';
    }
  }

  retirarPremio(){
    this.router.navigateByUrl('/final');
  }

  continuar(){
    this.router.navigateByUrl('/pregunta');
  }

  reset(){
    if(!this.gano) { this.preguntas.resetJuego(); this.router.navigateByUrl('/'); }
  }

}
