# SlnEjemplosangularClient

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------

ng new <nombre de mi proyecto nuevo>

------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------

adicionar componentes desde cli <se ejecuta desde la carpeta raiz del proyecto>
ejecutar "ng g c <ubicacion a partir de app>" g => generate, c => component

------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------

instalar botstrap y dejarlo como necesario en el archivo angular.json
npm install bootstrap --save

instalar jquey y dejarlo como necesario en el archivo angular.json
npm install jquey --save

instalar popper.js y dejarlo como necesario en el archivo angular.json
npm install popper.js --save

aca se configura css y js despues de instalar por npm

projects/sln_ejemplosangular.client/architect/build/options/styles
projects/sln_ejemplosangular.client/architect/build/options/scripts

------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------

Ruting

creacion de modulo <app-routing.module.ts> y luego usar <roouter-outlet></roouter-outlet> en app.component.ts
en <app.module.ts> importar en imports <AppRoutingModule>

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


usar entre la etiquerta del html [routerLink]="['p1','p2','p3']" => url/p1/p2/p3
[routerLink]="['directive']"


------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------

Servicios

se crea una nueva clase pero con el decorador injectable

import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  constructor() {
    console.log("Servicio corriendo");
  }
}

luego se llama desde un componente referenciandolo y luego llamandolo desde el constructor

import { UsuarioService } from '../../Services/usuario.service'
constructor(private _userService:UsuarioService){}

------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------
