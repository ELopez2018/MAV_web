import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticasPrivacidadRoutingModule } from './politicas-privacidad-routing.module';
import { PoliticasPrivacidadComponent } from './politicas-privacidad.component';


@NgModule({
  declarations: [
    PoliticasPrivacidadComponent
  ],
  imports: [
    CommonModule,
    PoliticasPrivacidadRoutingModule
  ]
})
export class PoliticasPrivacidadModule { }
