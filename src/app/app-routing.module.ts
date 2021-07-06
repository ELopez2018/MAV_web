import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'miasesorvial', loadChildren: () => import('./miasesorvial/miasesorvial.module').then(m => m.MiasesorvialModule) },
  { path: 'condiciones-de-uso', loadChildren: () => import('./condiciones-uso/condiciones-uso.module').then(m => m.CondicionesUsoModule) },
  { path: 'politicas-de-privacidad', loadChildren: () => import('./politicas-privacidad/politicas-privacidad.module').then(m => m.PoliticasPrivacidadModule) },
  { path: 'multimedia', loadChildren: () => import('./multimedia/multimedia.module').then(m => m.MultimediaModule) },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
