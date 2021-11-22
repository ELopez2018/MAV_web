import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '@root/shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { AreasDePracticaComponent } from './components/areas-de-practica/areas-de-practica.component';
import { ComoLoHacemosComponent } from './components/como-lo-hacemos/como-lo-hacemos.component';
import { TrabajamosParaNuestrosUsuariosComponent } from './components/trabajamos-para-nuestros-usuarios/trabajamos-para-nuestros-usuarios.component';
import { EspecialistasComponent } from './components/especialistas/especialistas.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import { CuentanosComponent } from './components/cuentanos/cuentanos.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { SistemaNacionaTransporteComponent } from './components/sistema-naciona-transporte/sistema-naciona-transporte.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    AreasDePracticaComponent,
    ComoLoHacemosComponent,
    TrabajamosParaNuestrosUsuariosComponent,
    EspecialistasComponent,
    SeguimientoComponent,
    PlantillasComponent,
    CuentanosComponent,
    TestimoniosComponent,
    SistemaNacionaTransporteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
