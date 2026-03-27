import { Injectable } from '@angular/core';

export interface DeviceIdOptions {
  storageKey?: string;
  forceRegenerate?: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class HolinsysDeviceService {
  private readonly defaultStorageKey = 'holinsys_device_id';

  getDeviceId(options: DeviceIdOptions = {}): string {
    const storageKey = options.storageKey ?? this.defaultStorageKey;

    if (options.forceRegenerate) {
      const newId = this.generateDeviceId();
      this.save(storageKey, newId);
      return newId;
    }

    const existing = this.load(storageKey);
    if (existing) {
      return existing;
    }

    const created = this.generateDeviceId();
    this.save(storageKey, created);
    return created;
  }

  clearDeviceId(storageKey = this.defaultStorageKey): void {
    if (!this.hasStorage()) {
      return;
    }

    localStorage.removeItem(storageKey);
  }

  private hasStorage(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private load(storageKey: string): string | null {
    if (!this.hasStorage()) {
      return null;
    }

    return localStorage.getItem(storageKey);
  }

  private save(storageKey: string, value: string): void {
    if (!this.hasStorage()) {
      return;
    }

    localStorage.setItem(storageKey, value);
  }

  private generateDeviceId(): string {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }

    const randomPart = Math.random().toString(36).slice(2, 10);
    return `dev-${Date.now()}-${randomPart}`;
  }
}
