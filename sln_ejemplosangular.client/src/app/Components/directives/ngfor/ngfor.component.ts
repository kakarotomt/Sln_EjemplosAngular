import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: false,
  
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgForComponent {
  personas: any[];
  constructor() {
    this.personas = [{ persona: "p1" }, { persona: "p2" }, { persona: "p3" }];
;
  }
}
