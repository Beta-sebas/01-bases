import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {


    ngOnInit(): void {
    }

    @Input() nuevo: Personaje = {
        nombre: '',
        poder: 0
    }

    //@Output () onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

    constructor( private DbzService : DbzService) { }

    agregar() {

        if (this.nuevo.nombre.trim().length === 0 && this.nuevo.poder == 0) { return}
        
            this.DbzService.agregarPersonajes(this.nuevo);
        //this.onNuevoPersonaje.emit(this.nuevo);
        //console.log(this.onNuevoPersonaje);
        
        this.nuevo = {
            nombre: '',
            poder: 0
        }

    }

}
