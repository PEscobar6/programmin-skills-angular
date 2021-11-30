import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
PersonModule

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { PersonModule } from './heroes/person.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'person',
    loadChildren: () => import('./heroes/person.module').then( m => m.PersonModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
