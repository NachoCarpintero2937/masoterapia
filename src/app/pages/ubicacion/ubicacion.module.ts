import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbicacionRoutingModule } from './ubicacion-routing.module';
import { UbicacionComponent } from './ubicacion.component';
import { MaterialModule } from 'src/app/components/material/material.module';
@NgModule({
  declarations: [UbicacionComponent],
  imports: [
    CommonModule,
    UbicacionRoutingModule,
    MaterialModule
  ],
  exports: [UbicacionComponent]
})
export class UbicacionModule { }
