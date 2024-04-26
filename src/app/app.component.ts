import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gapsi';

  version = 1.0;

  constructor(private router: Router){

  }

  creation() {
    // Redirige al componente de creación
    this.router.navigate(['/crear']); // Ajusta la ruta según tu configuración
}
}
