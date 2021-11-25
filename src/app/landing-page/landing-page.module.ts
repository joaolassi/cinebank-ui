import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page/landing-page.component'
import { LandingPageRoutingModule } from './landing-page-routing.module';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,

    LandingPageRoutingModule
  ],
})
export class LandingPageModule { }
