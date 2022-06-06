import { Component, OnInit } from '@angular/core';
import { empleados } from '../models/empleado.model';
import { EmpleadosService } from '../services/empleados.service';
import { EmpresasService } from '../services/empresas.service';
import { empresas } from '../models/empresa.model';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
empresas?: empresas[];

empleado: empleados = 
  {
    rut: '',
    nombre: '',
    email: '',
    empresa: '',
  
  }
submitted = false;

  constructor(private empleadosService:EmpleadosService,private empresaService: EmpresasService) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  saveEmpleado(): void {
    const data = {
      rut: this.empleado.rut,
      nombre: this.empleado.nombre,
      email: this.empleado.email,
      empresa: this.empleado.empresa,
    };
    this.empleadosService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newEmpleado(): void {
    this.submitted = false;
    this.empleado = {
      rut: '',
      nombre: '',
      email: '',
      empresa: '',
    };
  }

  obtenerEmpresas() {
    this.empresaService.getAll()
      .subscribe(
        data => {
          this.empresas = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }



}
