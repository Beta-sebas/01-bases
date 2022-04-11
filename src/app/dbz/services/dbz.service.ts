import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    constructor(){
        console.log('servicio iniciado');
        
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

}