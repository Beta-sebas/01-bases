import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.Component.html'
})
export class HeroeComponent{

    nombre : string = 'ironman';
    edad : number = 45;
    

    get nombreCapitalizado(): string{

        return this.nombre.toUpperCase();
        
    }

    capitalizado():string{
        return ` ${this.nombre} - ${this.edad} `;
    }

    cambiarNombre(): void{
        this.nombre = 'Batman';
    }

}
