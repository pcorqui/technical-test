import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GreetingsService } from './service/greetings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'gapsi';

  version: string = "1.0";

  constructor(private router: Router,private greeting: GreetingsService){

  }

  ngOnInit(){

    this.getVersion();
  }

  creation() {
    // Redirige al componente de creación
    this.router.navigate(['/crear']); // Ajusta la ruta según tu configuración
}

 getVersion(){
    this.greeting.getVersion().subscribe(
      (data: string) => {
          this.version = data;
      }
  )
 }
}
