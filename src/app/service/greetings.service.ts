import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  api = "http://localhost:8080/saludar"

  constructor(private http: HttpClient) { }


  getGreeting(){
    return this.http.get(`${this.api}`, {responseType: 'text'});
  }

  getVersion(){
    return this.http.get(`${this.api}/version`, {responseType: 'text'});
  }
}
