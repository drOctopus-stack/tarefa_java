import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseURL = "http://localhost:8080/empresa/";

  constructor(private httpClient: HttpClient) { }

  createEmpresa(empresa: Empresa): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}salvar`, empresa);
  }
  
  getEmpresasList(params: Array<String>): Observable<Empresa[]>{
    return this.httpClient.get<Empresa[]>(`${this.baseURL}listar/${params}`);
  }

  updateEmpresa(id: number, empresa: Empresa): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}${id}`, empresa);
  }

  deleteEmpresa(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}excluir/${id}`);
  }
}