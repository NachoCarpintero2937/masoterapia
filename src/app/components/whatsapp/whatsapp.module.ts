import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappComponent } from './whatsapp.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [WhatsappComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [WhatsappComponent]
})
export class WhatsappModule { }
