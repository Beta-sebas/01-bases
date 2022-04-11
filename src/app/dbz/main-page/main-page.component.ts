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

    nuevo:Personaje = {
        nombre: "",
        poder : 0
    }

}
