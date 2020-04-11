import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componentes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
