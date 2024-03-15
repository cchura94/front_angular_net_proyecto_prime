import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogComponent } from './blog/blog.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'nosotros',
        component: NosotrosComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'galeria',
        component: GaleriaComponent
      },
      {
        path: 'servicios',
        component: ServiciosComponent
      }
    ]
  }
  
  
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class WebRoutingModule { }
