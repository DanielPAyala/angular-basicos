import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Superman', 'Batman', 'Thor']

  heroeEliminado: string = ''

  borrarHeroe(): void {
    this.heroeEliminado = this.heroes.pop() || ''
  }

}
