import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  validacion = false;


  constructor(private Servicio:LoginService,private router: Router){}


  onSubmit(form){

    this.Servicio.login().subscribe((data: Response)=>{
     
      this.validacion = true;

      for(let key in data){

        if(data[key].email == form.value.nombre && data[key].password == form.value.password){
          this.validacion = false;
          this.router.navigate(['/principal']);
        }
      }

    }
  );

    
  }

}
