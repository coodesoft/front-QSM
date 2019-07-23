import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-vista-respuesta',
  templateUrl: './vista-respuesta.component.html',
  styleUrls: ['./vista-respuesta.component.css']
})
export class VistaRespuestaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToPregunta(){
      this.router.navigateByUrl('/pregunta');
  }

}
