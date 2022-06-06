import { Component, OnInit } from '@angular/core';
import {empleados} from '../models/empleado.model';
import {EmpleadosService} from '../services/empleados.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {
  empleado?: empleados[];
  currentEmpleado: empleados = {};
  nombre = '';
  currentIndex = -1;
  empresa = '';
  constructor(private empleadoService: EmpleadosService,private route: ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.empresa = params["id"];
      this.obtenerEmpleados();



    });

    

  }
  obtenerEmpleados() {
    this.empleadoService.findByEmpresa(this.empresa)
      .subscribe(
        data => {
          this.empleado = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }
}
