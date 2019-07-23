import { Component } from '@angular/core';

import { PreguntasService } from './services/preguntas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '¿Quién quiere ser Original?';

  constructor (
    private preguntaS:PreguntasService
  ){
    this.preguntaS.getPreguntas();
  }
}
