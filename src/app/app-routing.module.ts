import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarritoComponent} from './carrito/carrito.component';
import {PrincipalComponent} from './principal/principal.component';
import {LoginComponent} from './login/login.component'
import {VermasComponent} from './vermas/vermas.component'


const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'ver', component: VermasComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
