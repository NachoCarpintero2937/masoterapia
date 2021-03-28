import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MaterialModule } from '../material/material.module';
import { WhatsappModule } from '../whatsapp/whatsapp.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WhatsappModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
