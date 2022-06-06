import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empresas } from '../models/empresa.model';
const baseUrl = 'http://localhost:8080/api/empresas';
@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<empresas[]> {
    return this.http.get<empresas[]>(baseUrl);
  }
  get(rut: any): Observable<empresas> {
    return this.http.get(`${baseUrl}/${rut}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }


}