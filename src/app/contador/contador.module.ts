import { NgModule } from "@angular/core"
import { ContadorComponent } from './contador.componente';

@NgModule ({
  declarations: [
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ]



})


export class ContadorModule{

}
