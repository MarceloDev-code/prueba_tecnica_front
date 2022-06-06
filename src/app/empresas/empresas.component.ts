import { Component, OnInit } from '@angular/core';
import { empresas } from '../models/empresa.model';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresa: empresas = {
    rut: '',
    nombre: '',
    direccion: '',
    telefono: '',
  };
  submitted = false;
  constructor(private empresaService: EmpresasService) { }

  ngOnInit(): void {
  }
  saveEmpresa(): void {
    const data = {
      rut: this.empresa.rut,
      nombre: this.empresa.nombre,
      direccion: this.empresa.direccion,
      telefono: this.empresa.telefono,

    };
    this.empresaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newEmpresa(): void {
    this.submitted = false;
    this.empresa = {
      rut: '',
      nombre: '',
      direccion: '',
      telefono: '',
    };
  }

}






 
    