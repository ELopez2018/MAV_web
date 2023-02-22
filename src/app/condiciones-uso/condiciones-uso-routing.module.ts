import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondicionesUsoComponent } from './condiciones-uso.component';

const routes: Routes = [{ path: '', component: CondicionesUsoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondicionesUsoRoutingModule { }
