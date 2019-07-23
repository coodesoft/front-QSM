import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Jugador }          from './../models/jugador';
import { JugadoresService } from './../services/jugadores.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  private jugador:Jugador = new Jugador();

  constructor(
    private router:    Router,
    private jugadores: JugadoresService
  ) { }

  ngOnInit() {
  }

  goToMarcaModelo() {
    if (this.jugador.isValid()){
      this.jugadores.addJugador(this.jugador);
      this.router.navigateByUrl('/pregunta');
    } else {
      alert(this.jugador.getErrors());
    }
  }
}
