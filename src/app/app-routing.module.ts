import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './components/crear/crear.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavComponent } from './components/nav/nav.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Ruta de inicio
    { path: 'crear', component: CrearComponent }, // Ruta al componente de creación
    { path: 'welcome', component: PrincipalComponent }, // Ruta al componente de creación
    { path: 'welcome/menu', component: NavComponent},
    { path: 'proveedores', component:ProveedoresComponent},
    { path: '**', redirectTo: "/welcome"}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
