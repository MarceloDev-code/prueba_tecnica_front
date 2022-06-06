import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empleados } from '../models/empleado.model';
const baseUrl = 'http://localhost:8080/api/empleados';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  constructor(private http: HttpClient) { }
  findByEmpresa(empresa: any): Observable<empleados[]> {
    return this.http.get<empleados[]>(`${baseUrl}/${empresa}`);
  }
  get(rut: any): Observable<empleados> {
    return this.http.get(`${baseUrl}/${rut}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }


}