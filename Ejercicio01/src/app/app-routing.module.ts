import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component'
import { ErrorComponent } from './componentes/error/error.component'

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: '',component:HomeComponent},
  {path: '**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
