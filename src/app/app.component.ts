import { Component, ViewChild, ElementRef } from '@angular/core';
import { BigScreenService } from 'angular-bigscreen';
import { PreguntasService } from './services/preguntas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fs', {static: false}) fs: ElementRef;

  title = '¿Quién quiere ser Original?';

  public isFullscreen = false;

  constructor (
    public preguntaS:PreguntasService,
    public bgsc:     BigScreenService
  ){
    this.preguntaS.getPreguntas();
  }

  gotofs(){ this.bgsc.request(this.fs.nativeElement); }

}
