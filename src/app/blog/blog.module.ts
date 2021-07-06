import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { CardBlogPrincipalComponent } from './components/card-blog-principal/card-blog-principal.component';
import { CardBlogComponent } from './components/card-blog/card-blog.component';


@NgModule({
  declarations: [
    BlogComponent,
    CardBlogPrincipalComponent,
    CardBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
