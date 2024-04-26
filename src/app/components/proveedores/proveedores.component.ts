import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../models/Proveedor.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent implements OnInit{

  proveedores: Proveedor[] = [{
    id: 1,
    name: 'abc',
    razonSocial: 'godin',
    direccion: 'su casa',
    active: true,
    create_at: new Date()
  },
  {
    id: 2,
    name: 'abc',
    razonSocial: 'godin',
    direccion: 'su casa',
    active: true,
    create_at: new Date()
  },
  {
    id: 3,
    name: 'abc',
    razonSocial: 'godin',
    direccion: 'su casa',
    active: true,
    create_at: new Date()
  }
]

ngOnInit(): void {
 
}

deleteProveedor(id: number){
  console.log('id a eliminar' + id);
}

}
