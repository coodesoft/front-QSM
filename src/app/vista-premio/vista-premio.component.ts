import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-vista-premio',
  templateUrl: './vista-premio.component.html',
  styleUrls: ['./vista-premio.component.css']
})
export class VistaPremioComponent implements OnInit {

  constructor(
    public router:    Router
  ) { }

  ngOnInit() {
  }

  retirarPremio(){
    this.router.navigateByUrl('/final');
  }

  continuar(){
    this.router.navigateByUrl('/pregunta');
  }

}
