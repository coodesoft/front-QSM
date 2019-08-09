import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Pregunta } from './../models/pregunta';
import { PreguntasService } from './../services/preguntas.service';

@Component({
  selector: 'app-form-pregunta',
  templateUrl: './form-pregunta.component.html',
  styleUrls: ['./form-pregunta.component.css'],
  animations: [
    trigger('change_backgr', [
      state('initial', style({ opacity: '0' })),
      state('final',   style({ opacity: '1' })),
      transition('initial=>final', animate('300ms')),
      transition('final=>initial', animate('300ms'))
    ]),

    trigger('options_opc', [
      state('initial', style({ opacity: '0' })),
      state('final',   style({ opacity: '1' })),
      transition('initial=>final', animate('2000ms')),
      transition('final=>initial', animate('2000ms'))
    ]),
  ]
})
export class FormPreguntaComponent implements OnInit {

  public pregunta:Pregunta      = new Pregunta();
  public pregunta_actual:number = 0;
  public opcion_select:any      = {'a':false, 'x':0, 'y':0, 'd':'hidden'};

  private audio:any;
  private a_opc:number = 0;
  public opc_anim_std = ['initial','initial','initial','initial'];

  constructor(
    public router:     Router,
    public preguntas:  PreguntasService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.pregunta        = new Pregunta(this.preguntas.getSigPregunta());
    this.pregunta_actual = this.preguntas.getNumberActual();
    this.opcion_select.a = false;

    setTimeout(()=>{ this.opc_anim_std[0] = 'final'; }, 200);
    setTimeout(()=>{ this.opc_anim_std[1] = 'final'; }, 2000);
    setTimeout(()=>{ this.opc_anim_std[2] = 'final'; }, 4000);
    setTimeout(()=>{ this.opc_anim_std[3] = 'final'; }, 6000);
  }

  goToRespuesta(){

    if (this.pregunta.isValid()){
      this.preguntas.setRespuesta(this.pregunta);
      this.router.navigateByUrl('/respuesta');
    } else {
      this._snackBar.open(this.pregunta.getErrors(), 'ACEPTAR', {
        duration: 10000,
      });
    }
  }

  trigger_anim_opc(n){
    //if (n <= this.a_opc) { return 'void'; }
    return 'final';
  }

  sig_anim_opc( e: AnimationEvent){
    //console.log(e.totalTime);
  //  if(e.totalTime) { this.a_opc ++; }
  }

  comodin(c){
    let r = this.preguntas.useComodin(c,this.pregunta);
    if (r){
      this.router.navigateByUrl('/respuesta');
    }
  }

  getTextSizeOp(t){
    let s ='25px';
    if (String(t).length > 35){ s='24px'; }
    if (String(t).length > 46){ s='20px'; }
    //if (String(t).length > 46){ s='20px'; }
    return s;
  }

  getBottomOp(t){
    let s ='5px';
    if (String(t).length > 35){ s='7px'; }
    if (String(t).length > 54){ s='0px'; }
    return s;
  }

  getTextSizeTit(t){
    let s = '45px';
    if (String(t).length > 50){ s='30px'; }
    if (String(t).length > 90){ s='25px'; }
    return s;
  }

  getTopTit(t){
    let s = '30px';
    if (String(t).length > 50){ s='37px'; }
    if (String(t).length > 86){ s='22px'; }
    return s;
  }

  display_comodin_img(){
    if (this.pregunta.tipo == 3)       { return 'hidden';  }
    if (this.preguntas.comodines[1].a) { return 'visible'; }
    return 'hidden';
  }

  display_optbk_img(){
    if (this.pregunta.tipo == 3) { return 'hidden';  }
    if (this.opcion_select.a)    { return 'visible'; }
    return 'hidden';
  }

  set_anim_comodin(){
    if (this.preguntas.comodines[1].a) { return 'final'; } return 'initial';
  }

  set_anim_option(){
    if (this.opcion_select.a) { return 'final'; } return 'initial';
  }

  setRespuesta(n){
    this.opcion_select.a = true;
    this.opcion_select.d = 'visible';
    this.opcion_select.x = this.preguntas.position_ini_opc[n].x+'px';
    this.opcion_select.y = this.preguntas.position_ini_opc[n].y+'px';

    this.audio           = new Audio();
    this.audio.src       = "./assets/snd/opcion_select.mp3";
    this.audio.load();
    this.audio.play();

    setTimeout(()=>{
      this.pregunta.opcion_elegida = n;
      this.goToRespuesta();
    }, 4000);
  }

}
