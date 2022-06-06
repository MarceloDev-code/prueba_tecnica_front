import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadosListComponent } from './empleados-list/empleados-list.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';



const routes: Routes = [

  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  { path: 'empresas', component: EmpresasListComponent },
  { path: 'empresas/:id', component: EmpresasComponent },
  { path: 'add_empresa', component: EmpresasComponent },
  { path: 'empleados/:id', component: EmpleadosListComponent },
  { path: 'add', component: EmpleadosComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) { }
  
  empleados(rut: any) {
    this.router.navigate(['/empleados/' + rut]);
  }
}


