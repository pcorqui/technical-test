import { Component, OnInit } from '@angular/core';
import { GreetingsService } from '../../service/greetings.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{

  constructor(private greetingService: GreetingsService){

  }
  mensajeBienvenida:string = "Hola fasdfd";

  ngOnInit(){

  this.greetingService.getGreeting().subscribe(
  (data:string) => {
      this.mensajeBienvenida = data;
    },
    (error) => {
      console.log("error al obtener el string", error)
    }
  )
  }
}
