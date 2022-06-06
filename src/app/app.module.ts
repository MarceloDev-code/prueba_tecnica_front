import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadosListComponent } from './empleados-list/empleados-list.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    EmpleadosComponent,
    EmpleadosListComponent,
    EmpresasListComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

