import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  private jugadores:any = [];

  constructor() { }

  public addJugador(j){
    this.jugadores.push(j);
  }
}
