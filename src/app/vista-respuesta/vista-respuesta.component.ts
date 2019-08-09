import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { PreguntasService } from './../services/preguntas.service';
import { Respuesta }        from './../models/respuesta';

@Component({
  selector: 'app-vista-respuesta',
  templateUrl: './vista-respuesta.component.html',
  styleUrls: ['./vista-respuesta.component.css']
})
export class VistaRespuestaComponent implements OnInit {

  public respuesta = new Respuesta();
  public audio:any;

  constructor(
    public router: Router,
    public preguntas: PreguntasService
  ) { }

  ngOnInit() {
    this.respuesta = this.preguntas.getRespuesta();
    this.audio = new Audio();
    if(this.respuesta.acertada) { this.audio.src = "./assets/snd/aplauso1.mp3"; } else { this.audio.src = "./assets/snd/fail.mp3"; }
    this.audio.load();
    this.audio.play();
  }

  goToPregunta(){
      if (this.preguntas.preguntaActual == 3) {
        this.router.navigateByUrl('/premio1'); return true;
      }

      if (this.preguntas.preguntaActual == 5){
        this.router.navigateByUrl('/final'); return true;
      }

      if (!this.respuesta.acertada && this.respuesta.tipo != 3){
        this.preguntas.resetJuego();
        this.router.navigateByUrl('/final'); return true;
      }

      this.router.navigateByUrl('/pregunta');
  }

}
