import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppLayoutModule } from '../layout/app.layout.module';


@NgModule({
  declarations: [
    PerfilComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule
  ]
})
export class AdminModule { }
