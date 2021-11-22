import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 9000
    },{
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  get personajes(): Personaje[] {
    //queremos retornar un arreglo independiente del original el problema es que
    //dado que javascript manda todo por referencia
    //necesitamos romper esa referencia creando un nuevo arreglo on the fly
    //para ello ocupamos el operador spread "..." sin comillas
    //return [ ...this._personajes ];
    return [...this._personajes] ;
  }

  constructor(){}

  agregarPersonaje( personaje: Personaje){
    this._personajes.push(personaje);
  }
}
