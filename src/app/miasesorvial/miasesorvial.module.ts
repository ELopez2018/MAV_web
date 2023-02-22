import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiasesorvialRoutingModule } from './miasesorvial-routing.module';
import { MiasesorvialComponent } from './miasesorvial.component';
import { ValoresCorporativosComponent } from './components/valores-corporativos/valores-corporativos.component';
import { CardValorCorporativoComponent } from './components/valores-corporativos/card-valor-corporativo/card-valor-corporativo.component';
import { SharedModule } from '@root/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    MiasesorvialComponent,
    ValoresCorporativosComponent,
    CardValorCorporativoComponent
  ],
  imports: [
    CommonModule,
    MiasesorvialRoutingModule,
    CarouselModule
  ]
})
export class MiasesorvialModule { }
