import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empresas } from '../models/empresa.model';
import { EmpresasService } from '../services/empresas.service';

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {
  empresas?: empresas[];
  currentEmpresa: empresas = {};
  nombre = '';
  currentIndex = -1;

  constructor(private empresaService: EmpresasService, private router: Router) { 
  }

  ngOnInit(): void {
    this.obtenerEmpresas();
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
  refreshList() {
    this.obtenerEmpresas();
    this.currentEmpresa = {};
  }

  setActiveEmpresa(empresa: empresas, index: number) {
    this.currentEmpresa = empresa;
  }

  irAListaDeEmpleados(rut: empresas) {
    this.router.navigate(['empleados', rut.rut]);
  }
  

}
