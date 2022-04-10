import { Component } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Ironman', 'Batman', 'Hulk'];
    borrado: string[]  = [];
    

    borrarHeroe () {
      this.borrado = this.heroes.splice(0, 1);
    }
}
