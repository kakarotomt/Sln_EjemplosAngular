import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  anio : number;

  constructor() {
    this.anio = new Date().getFullYear();
  }
}
