import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  view: string = 'servicios';
  constructor(private config: ConfigService) {
    this.config.pantallas.subscribe((resp) => {
      this.view = resp;
    });
  }

  ngOnInit(): void {

  }

}
