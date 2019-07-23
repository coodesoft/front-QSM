import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRegistroComponent }    from './form-registro/form-registro.component';
import { PantallaInicioComponent }  from './pantalla-inicio/pantalla-inicio.component';
import { FormMarcaModeloComponent } from './form-marca-modelo/form-marca-modelo.component';
import { VistaRespuestaComponent }  from './vista-respuesta/vista-respuesta.component';
import { FormPreguntaComponent }    from './form-pregunta/form-pregunta.component';

const routes: Routes = [
  { path: '',             component: PantallaInicioComponent },
  { path: 'registro',     component: FormRegistroComponent },
  { path: 'marca-modelo', component: FormMarcaModeloComponent },
  { path: 'pregunta',     component: FormPreguntaComponent },
  { path: 'respuesta',    component: VistaRespuestaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
