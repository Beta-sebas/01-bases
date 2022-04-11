import { Component, OnInit, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    constructor( private DbzService : DbzService) { }

    ngOnInit(): void {
    }

    personajes:Personaje[]= [
        {
           nombre: 'Goku',
           poder : 15000 
        },
        {
            nombre: 'Vegueta',
            poder : 12000
        },
        {
            nombre: 'Picoro',
            poder : 8000
        }
    ];

    nuevo:Personaje = {
        nombre: "",
        poder : 0
    }

    agregarPersonaje( personaje: Personaje){
        this.personajes.push(personaje);
    }

}
