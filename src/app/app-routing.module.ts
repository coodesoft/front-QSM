import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRegistroComponent }    from './form-registro/form-registro.component';
import { PantallaInicioComponent }  from './pantalla-inicio/pantalla-inicio.component';
import { FormMarcaModeloComponent } from './form-marca-modelo/form-marca-modelo.component';

const routes: Routes = [
  { path: '',             component: PantallaInicioComponent },
  { path: 'registro',     component: FormRegistroComponent },
  { path: 'marca-modelo', component: FormMarcaModeloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
