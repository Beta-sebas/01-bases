import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contadorBasico/contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule {

}