import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormPreguntaComponent } from './form-pregunta/form-pregunta.component';
import { VistaRespuestaComponent } from './vista-respuesta/vista-respuesta.component';
import { VistaPremioComponent } from './vista-premio/vista-premio.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegistroComponent,
    FormPreguntaComponent,
    VistaRespuestaComponent,
    VistaPremioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
