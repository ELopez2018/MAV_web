import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticasPrivacidadComponent } from './politicas-privacidad.component';

const routes: Routes = [{ path: '', component: PoliticasPrivacidadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticasPrivacidadRoutingModule { }
