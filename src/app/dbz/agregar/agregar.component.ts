import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  //se agrega referencia al servicio
  constructor( private DbzService: DbzService ) {}

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //Se reemplaza emisión del evento por uso del servicio
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  //agregar( event: any ) {
  agregar() {
    //event.preventDefault();

    if( this.nuevo.nombre.trim().length === 0 ){ return ; }

    //this.onNuevoPersonaje.emit( this.nuevo );
    this.DbzService.agregarPersonaje(this.nuevo);


    //limpiar
    /*
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    */
    this.limpiarDatos(); //por qué no funciona?

  }
  limpiarDatos():void {
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  cambiarNombre( event:any ){
    console.log(event);
  }

}
