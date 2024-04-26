import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  nombre: string = '';
  direccion: string = '';
  razonSocial: string = '';


  onSubmit(){

  }


}
