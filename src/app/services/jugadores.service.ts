import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 }        from 'ts-md5/dist/md5';

import { Jugador }       from './../models/jugador';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(
    public http:    HttpClient,
    public configs: ConfigService
  ) { }

  public addJugador(j:Jugador){
    let t = new Date().getTime();
    let m = new Md5();
    m.appendStr('c4prich0##r4bi050'+t);
    let p = this.configs.getConfig().url_add_jugador+'?token='+m.end()+'&t='+t;

    return this.http.post( p, j );
  }
}
