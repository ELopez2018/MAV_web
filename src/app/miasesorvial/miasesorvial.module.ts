import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiasesorvialRoutingModule } from './miasesorvial-routing.module';
import { MiasesorvialComponent } from './miasesorvial.component';


@NgModule({
  declarations: [
    MiasesorvialComponent
  ],
  imports: [
    CommonModule,
    MiasesorvialRoutingModule
  ]
})
export class MiasesorvialModule { }
