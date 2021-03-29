import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  constructor(private config: ConfigService) {
    this.config.changePantallas('servicios');
  }

  ngOnInit(): void {

  }
}
