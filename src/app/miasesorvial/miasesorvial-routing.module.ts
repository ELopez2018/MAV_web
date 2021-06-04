import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiasesorvialComponent } from './miasesorvial.component';

const routes: Routes = [{ path: '', component: MiasesorvialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiasesorvialRoutingModule { }
