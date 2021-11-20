import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 9000
    },{
      nombre: 'Vegeta',
      poder: 7500
    }
  ]
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
  }

  cambiarNombre( event:any ){
    console.log(event);
  }

  limpiarDatos():void {
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
