import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormPreguntaComponent } from './form-pregunta/form-pregunta.component';
import { VistaRespuestaComponent } from './vista-respuesta/vista-respuesta.component';
import { VistaPremioComponent } from './vista-premio/vista-premio.component';
import { FormMarcaModeloComponent } from './form-marca-modelo/form-marca-modelo.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormRegistroComponent,
    FormPreguntaComponent,
    VistaRespuestaComponent,
    VistaPremioComponent,
    FormMarcaModeloComponent,
    PantallaInicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
