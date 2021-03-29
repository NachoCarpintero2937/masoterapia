import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { MaterialModule } from 'src/app/components/material/material.module';
import { HomeModule } from '../home/home.module';
import { UbicacionModule } from '../ubicacion/ubicacion.module';
import { ServiciosModule } from '../servicios/servicios.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModule,
    HomeModule,
    UbicacionModule,
    ServiciosModule
  ]
})
export class LandingModule { }
