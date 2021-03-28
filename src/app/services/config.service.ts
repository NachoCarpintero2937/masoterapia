import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public pantallas: EventEmitter<any> = new EventEmitter();

  constructor() { }


  changePantallas(o) {
    this.pantallas.emit(o)
  }
}
