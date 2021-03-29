import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})
export class UbicacionComponent implements OnInit {

  constructor(private config: ConfigService) {
    this.config.changePantallas('servicios');
  }

  ngOnInit(): void {


  }

}
