import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  api = "http://localhost:8080"

  constructor(private http: HttpClient) { }


  getGreeting(){
    return this.http.get<string>(`${this.api}/saludar`);
  }

  getVersion(){
    return this.http.get<Number>(`${this.api}/version`);
  }
}
