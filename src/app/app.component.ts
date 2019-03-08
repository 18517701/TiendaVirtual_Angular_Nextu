import { Component } from '@angular/core';
import {LoginService} from './login.service'
import { log } from 'util';
import { usuario } from './usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  validacion = false;


  constructor(private Servicio:LoginService){}


  onSubmit(form){

    this.Servicio.login().subscribe((data: Response)=>{
     
      this.validacion = true;

      for(let key in data){

        if(data[key].email == form.value.nombre && data[key].password == form.value.password){
          this.validacion = false;
        }
      }
      

      console.log(this.validacion);
      //var usuarios = JSON.parse(JSON.stringify(data));
      
      //var validacion = false;
    }
  );

    
  }


}
