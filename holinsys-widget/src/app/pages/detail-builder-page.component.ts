import { Component } from '@angular/core';
import { DetailResult, buildDetail } from 'widget-holinsys';

@Component({
  selector: 'app-detail-builder-page',
  template: `
    <h2>Detail Builder</h2>
    <p>Ruta: <strong>/detail-builder</strong></p>

    <p>Entrada de ejemplo: ['holinsys', '42', true]</p>
    <button type="button" (click)="runExample()">Ejecutar ejemplo</button>

    <pre style="margin-top:12px; white-space: pre-wrap;">{{ result | json }}</pre>
  `,
  standalone: false
})
export class DetailBuilderPageComponent {
  result: DetailResult | null = null;

  runExample(): void {
    this.result = buildDetail(['holinsys', '42', true], {
      keys: ['name', 'attempts', 'active'],
      numericKeys: ['attempts'],
      includeMeta: true
    });
  }
}
