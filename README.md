# widget-holinsys

Librería utilitaria para Angular preparada para publicar en npm.

## ¿Qué incluye?

- `HolinsysDeviceService`: obtiene/genera un `deviceId` persistente.
- `buildDetail`: construye un detalle desde un arreglo de valores.

## Instalación

```bash
npm i widget-holinsys
```

## Uso en Angular

### 1) Servicio para deviceId

```ts
import { Component, inject } from '@angular/core';
import { HolinsysDeviceService } from 'widget-holinsys';

@Component({
  selector: 'app-demo',
  template: `<p>Device ID: {{ deviceId }}</p>`
})
export class DemoComponent {
  private readonly deviceService = inject(HolinsysDeviceService);
  readonly deviceId = this.deviceService.getDeviceId();
}
```

### 2) Constructor de detalle

```ts
import { buildDetail } from 'widget-holinsys';

const values = ['LAP-001', 'Laptop Lenovo', 3, 1200.50];

const detail = buildDetail(values, {
  keys: ['sku', 'description', 'quantity', 'price'],
  numericKeys: ['quantity', 'price'],
  includeMeta: true
});

console.log(detail);
```

## Desarrollo local

```bash
npm install
npm run build
```

## Publicar en npm

```bash
npm login
cd dist
npm publish --access public
```
