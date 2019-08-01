import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { FormRegistroComponent }   from './form-registro/form-registro.component';
import { FormPreguntaComponent }   from './form-pregunta/form-pregunta.component';
import { VistaRespuestaComponent } from './vista-respuesta/vista-respuesta.component';
import { VistaPremioComponent }    from './vista-premio/vista-premio.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { PantallaFinalComponent } from './pantalla-final/pantalla-final.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegistroComponent,
    FormPreguntaComponent,
    VistaRespuestaComponent,
    VistaPremioComponent,
    PantallaInicioComponent,
    PantallaFinalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
