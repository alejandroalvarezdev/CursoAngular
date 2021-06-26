import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
  
})
export class ListadoComponent {

  heroes:string[] = ['spiderman', 'ironman', 'hulk']; 
  heroeBorrado:string=''; //variables / objetos globales 
  
  eliminar():void{
    let nuevoArreglo =this.heroes.pop()||'';
    this.heroeBorrado = nuevoArreglo;
  
  }
  
  
  constructor() { }



}
