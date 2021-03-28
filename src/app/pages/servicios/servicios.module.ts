import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { MaterialModule } from 'src/app/components/material/material.module';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MaterialModule
  ],
  exports: [ServiciosComponent]
})
export class ServiciosModule { }
