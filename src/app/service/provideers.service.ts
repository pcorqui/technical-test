import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../models/Proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProvideersService {

  api="http://localhost:8080";

  constructor(private http: HttpClient) { }

  getProvideers(){
    return this.http.get<Proveedor>(`${this.api}/proveedor/listar`);
  }
}
