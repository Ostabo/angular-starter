import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class PersistenceService {
  private readonly _isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this._isBrowser = isPlatformBrowser(platformId);
  }

  getItem(key: string): string | null {
    if (!this._isBrowser) {
      return null;
    }
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    if (!this._isBrowser) {
      throw new Error("Cannot set item on server side");
    }
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    if (!this._isBrowser) {
      throw new Error("Cannot remove item on server side");
    }
    localStorage.removeItem(key);
  }
}
