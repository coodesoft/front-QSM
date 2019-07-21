import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-inicio',
  templateUrl: './pantalla-inicio.component.html',
  styleUrls: ['./pantalla-inicio.component.css']
})
export class PantallaInicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRegistro() {
    this.router.navigateByUrl('/registro');
  }

}
