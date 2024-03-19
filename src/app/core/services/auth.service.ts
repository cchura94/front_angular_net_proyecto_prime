import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // version 17 Angular
  // http2 = inject(HttpClient)
  urlBase: string = "https://lv.blumbit.net/back/public/api";

  constructor(private _http: HttpClient) { }

  loginConNet(datos: any){
    return this._http.post(`${this.urlBase}/v1/auth/login`, datos)
  }

  registroConNet(datos: any){
    return this._http.post(`${this.urlBase}/auth/register`, datos)
  }

  getPerfil(){
    return this._http.get(`${this.urlBase}/v1/auth/profile`)
  }

}
