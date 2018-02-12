import { Component } from '@angular/core';

import { Mock } from './mock';
import { Person } from "./model";

@Component({
  selector: 'app-root',
  template: '<h1>Exemplo de formulario</h1>',
  templateUrl: './app.component.html',
  providers: [Mock]
})
export class AppComponent {
  user: Person;

  constructor(_mock:Mock) {
    this.user = _mock.mike;
  }
}
