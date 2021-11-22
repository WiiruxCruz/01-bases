import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //@Input('data')
  @Input()
  personajes: any[] = [];

  constructor( private DbzService: DbzService) {

  }
}
