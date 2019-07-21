import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMarcaModelo() {
    this.router.navigateByUrl('/marca-modelo');
  }
}
