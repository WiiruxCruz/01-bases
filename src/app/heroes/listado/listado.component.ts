import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'iron-man', 'hulk', 'thor', 'capitan america'];
  //heroesBorrados: string[] = [];
  heroeBorrado: string = '';

  borrarHeroe(): void{

      //this.heroes = [];
      this.heroeBorrado = this.heroes.shift() || '';
      //this.heroesBorrados.push(heroeBorrado);


  }
}
