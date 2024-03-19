import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  miPerfil: any;

  authService = inject(AuthService)

  constructor(private authService2: AuthService){

    this.authService.getPerfil().subscribe(
      (res: any) => {

        this.miPerfil = res;
      }
    )

  }



}
