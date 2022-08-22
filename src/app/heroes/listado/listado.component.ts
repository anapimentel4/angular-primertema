import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {


  heroes: string[] = [ 'Superman', 'batichica', ' manuela']
  heroeBoarrado: string = '';

  BorrarHeroe (){
  this.heroeBoarrado = this.heroes.shift() || ' ';

  }


}
