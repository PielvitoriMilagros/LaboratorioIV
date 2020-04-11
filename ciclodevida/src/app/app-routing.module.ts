import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path:'', component:BienvenidosComponent},
  {path:'home', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
