import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';


@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
