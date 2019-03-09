import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../producto.service'


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  productos: any[]=[];
  subproducto: any[]=[];

  constructor(private producto: ProductoService) { }
  
  buscador(texto){
    this.subproducto = [];
    for(var i=0; i<this.productos.length; i++){
      var cadena;
      cadena = this.productos[i].nombre;

      if(cadena.indexOf(texto)!=-1){
        this.productos[i].vista = true
        this.subproducto.push(this.productos[i])
      }else{
        this.productos[i].vista = false
      }
    }
   
    
  }


  ngOnInit() {
    this.producto.producto().subscribe((data: Response)=>{
      for(let key in data){
        if(data[key]!=null){

          this.productos.push(data[key]);
        }
        
        }
        this.subproducto = this.productos;
      console.log(this.productos)
    })
  } 

 

}
