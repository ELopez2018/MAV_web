import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleBlogRoutingModule } from './single-blog-routing.module';
import { SingleBlogComponent } from './single-blog.component';


@NgModule({
  declarations: [
    SingleBlogComponent
  ],
  imports: [
    CommonModule,
    SingleBlogRoutingModule
  ]
})
export class SingleBlogModule { }
