import { Component, Inject } from '@angular/core';
import { HolinsysDeviceService } from 'widget-holinsys';

@Component({
  selector: 'app-deviceid-page',
  template: `
    <h2>Device ID</h2>
    <p>Ruta: <strong>/deviceid</strong></p>

    <p><strong>ID actual:</strong> {{ currentDeviceId || '-' }}</p>

    <div style="display:flex; gap:8px; flex-wrap: wrap;">
      <button type="button" (click)="load()">Obtener ID</button>
      <button type="button" (click)="regenerate()">Regenerar ID</button>
      <button type="button" (click)="clear()">Limpiar ID</button>
    </div>
  `,
  standalone: false
})
export class DeviceIdPageComponent {
  currentDeviceId = '';

  constructor(@Inject(HolinsysDeviceService) private deviceService: HolinsysDeviceService) {}

  load(): void {
    this.currentDeviceId = this.deviceService.getDeviceId();
  }

  regenerate(): void {
    this.currentDeviceId = this.deviceService.getDeviceId({ forceRegenerate: true });
  }

  clear(): void {
    this.deviceService.clearDeviceId();
    this.currentDeviceId = '';
  }
}
