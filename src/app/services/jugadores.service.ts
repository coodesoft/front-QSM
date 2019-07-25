import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  public jugadores:any = [];

  constructor() { }

  public addJugador(j){
    this.jugadores.push(j);
  }
}
