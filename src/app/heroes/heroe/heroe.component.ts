import { ThisReceiver } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
  selector : "app-heroe",
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
 nombre : string = " Manuel ";
 edad   : number = 23;

 get nombreCapitazado (){
  return this.nombre.toUpperCase();
 };

 obtenerNombre (): string {
  return ` ${ this.nombre } - ${this.edad}
  `
 };


CambiarHeroe ():void   {
 this.nombre =" Spiderman"
};

CambiaEdad (): void {
  this.edad = 31;
}


}
