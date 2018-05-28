import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LizComponent } from './liz/liz.component';

const routes: Routes = [
  {
  path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'liz',
    component: LizComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
