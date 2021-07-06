import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultimediaRoutingModule } from './multimedia-routing.module';
import { MultimediaComponent } from './multimedia.component';
import { VisorVideoComponent } from './components/visor-video/visor-video.component';


@NgModule({
  declarations: [
    MultimediaComponent,
    VisorVideoComponent
  ],
  imports: [
    CommonModule,
    MultimediaRoutingModule
  ]
})
export class MultimediaModule { }
