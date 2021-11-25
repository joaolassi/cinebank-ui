import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    {
      path: 'home',
      component: LandingPageComponent,
      canActivate: [AuthGuard],
    },
  ];
 @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
export class LandingPageRoutingModule {}
