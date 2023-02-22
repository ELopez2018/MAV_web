import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondicionesUsoRoutingModule } from './condiciones-uso-routing.module';
import { CondicionesUsoComponent } from './condiciones-uso.component';


@NgModule({
  declarations: [
    CondicionesUsoComponent
  ],
  imports: [
    CommonModule,
    CondicionesUsoRoutingModule
  ]
})
export class CondicionesUsoModule { }
