import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componente/bienvenida/bienvenida.component';
import { LoginComponent } from './componente/login/login.component';
import { ErrorComponent } from './componente/error/error.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './pages/input/admin/admin.component';
import { TablaAlumnoComponent } from './pages/input/tabla-alumno/tabla-alumno.component';
import { DetalleAlumnoComponent } from './pages/input/detalle-alumno/detalle-alumno.component';
import { FormAlumnoComponent } from './pages/input/form-alumno/form-alumno.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    AdminComponent,
    TablaAlumnoComponent,
    DetalleAlumnoComponent,
    FormAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
