import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input()
  personajes: Personaje[] = [];

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //agregar( event: any ) {
  agregar() {
    //event.preventDefault();

    if( this.nuevo.nombre.trim().length === 0 ){
      return ;
    }

    console.log( this.nuevo );

    this.personajes.push(this.nuevo);

    //limpiar
    /*
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    */
    this.limpiarDatos(); //por qué no funciona?

    console.log(this.personajes);
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
