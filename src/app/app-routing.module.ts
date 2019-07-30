import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRegistroComponent }    from './form-registro/form-registro.component';
import { PantallaInicioComponent }  from './pantalla-inicio/pantalla-inicio.component';
import { VistaRespuestaComponent }  from './vista-respuesta/vista-respuesta.component';
import { FormPreguntaComponent }    from './form-pregunta/form-pregunta.component';
import { VistaPremioComponent }     from './vista-premio/vista-premio.component';

const routes: Routes = [
  { path: '',             component: PantallaInicioComponent },
  { path: 'registro',     component: FormRegistroComponent },
  { path: 'pregunta',     component: FormPreguntaComponent },
  { path: 'respuesta',    component: VistaRespuestaComponent },
  { path: 'premio1',      component: VistaPremioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
