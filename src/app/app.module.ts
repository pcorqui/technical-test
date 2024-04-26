import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearComponent } from './components/crear/crear.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavComponent } from './components/nav/nav.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    PrincipalComponent,
    NavComponent,
    ProveedoresComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
