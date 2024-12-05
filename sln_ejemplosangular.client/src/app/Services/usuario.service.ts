import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  private usuarios: any[] = [
    { id: 1, nombre: "Juans", fechaNacimiento: "2020-01-01" },
    { id: 2, nombre: "Pedro", fechaNacimiento: "2020-01-02" },
    { id: 3, nombre: "Lucas", fechaNacimiento: "2020-01-03" },
    { id: 4, nombre: "Maria", fechaNacimiento: "2020-01-04" }

  ]

  constructor() {
    console.log("Servicio corriendo");
  }

  GetUsers(): any[] {
    return this.usuarios;
  }
}
