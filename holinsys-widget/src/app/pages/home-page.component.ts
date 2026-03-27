import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <h2>Ejemplos del widget</h2>
    <p>Abre cada ruta para ver una función:</p>
    <ul>
      <li><a routerLink="/deviceid">/deviceid</a></li>
      <li><a routerLink="/detail-builder">/detail-builder</a></li>
    </ul>
  `,
  standalone: false
})
export class HomePageComponent {}
