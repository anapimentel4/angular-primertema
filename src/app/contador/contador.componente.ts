import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `

      <h1>{{ titulo }}</h1>
      <h3> LA BASE ES: <strong> {{base}} </strong></h3>

      <button (click)=" acumular( base ) "> + {{ base}}</button>
      <span> {{ numero }}</span>
      <button (click)=" acumular(-5) "> - {{base}}</button>



  `
})

export class ContadorComponent {
    titulo: string  = 'Contador App';
  numero: number= 101;
  base  : number =5;

  acumular (valor: number ){
    this.numero += valor;

}
}
