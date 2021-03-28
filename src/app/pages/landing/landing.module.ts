import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { MaterialModule } from 'src/app/components/material/material.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModule,
    HomeModule
  ]
})
export class LandingModule { }
