import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public cLoaded:boolean  = false;
  public urlConfig:string = 'assets/config/config.json';
  public config:any;

  constructor(
    public http:    HttpClient
  ) { }

  getConfig(){
    if (this.cLoaded) { return this.config; }

    this.http.get( this.urlConfig ).subscribe(
      data => { this.config = data; this.cLoaded = true; return this.config; },
      err  => { return false; }
    );
  }
}
