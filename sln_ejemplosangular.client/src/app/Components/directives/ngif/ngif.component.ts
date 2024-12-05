import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: false,
  
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgIfComponent {
  textoVisualizar: string;
  visualizacion: boolean;

  constructor() {
    this.textoVisualizar = "Texto que se visualiza bien bonito con la directiva estructural *NgIf";
    this.visualizacion = true;
  }
}
