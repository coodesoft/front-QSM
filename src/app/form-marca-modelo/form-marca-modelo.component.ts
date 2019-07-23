import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-form-marca-modelo',
  templateUrl: './form-marca-modelo.component.html',
  styleUrls: ['./form-marca-modelo.component.css']
})
export class FormMarcaModeloComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToPregunta(){
    this.router.navigateByUrl('/respuesta');
  }

}
