import { SelectorContext } from "@angular/compiler";
import { Component } from "@angular/core";




@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {  
   public nombre:string = 'Ironman';
   public edad:number =45; 

    get nombreCapitalizado ():string{
        return this.nombre.toUpperCase();
    }

   obtenerNombre(){
       return `${this.nombre} - ${this.edad}`;
   }

   cambiarNombre(nuevoNombre:string):void{
    this.nombre = nuevoNombre;
   }

   cambiarEdad(nuevaEdad:number):number{
    return this.edad = nuevaEdad;
   }
}