import { Injectable, signal } from "@angular/core";
import { PersistenceService } from "../persistence/persistence.service";

export type ThemeState = {
  darkMode: boolean;
  materialV3: boolean;
};

const THEME_STORE_KEY = "theme-store";

@Injectable({
  providedIn: "root",
})
export class ThemeSwitcherService {
  theme = signal<ThemeState>({
    darkMode: true,
    materialV3: true,
  });

  constructor(private persistence: PersistenceService) {
    const storedTheme = this.persistence.getItem(THEME_STORE_KEY);
    if (!storedTheme) {
      return;
    }
    this.theme.set(JSON.parse(storedTheme) as ThemeState);
    this._adjustBodyClasses();
  }

  toggleDarkMode() {
    this.theme.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
    try {
      this.persistence.setItem(THEME_STORE_KEY, JSON.stringify(this.theme()));
      this._adjustBodyClasses();
    } catch (e) {
      this.theme.update((state) => ({
        ...state,
        darkMode: !state.darkMode,
      }));
      console.error("Failed to persist dark mode - Reverting change", e);
    }
  }

  toggleMaterialV3() {
    this.theme.update((state) => ({
      ...state,
      materialV3: !state.materialV3,
    }));
    try {
      this.persistence.setItem(THEME_STORE_KEY, JSON.stringify(this.theme()));
      this._adjustBodyClasses();
    } catch (e) {
      this.theme.update((state) => ({
        ...state,
        materialV3: !state.materialV3,
      }));
      console.error("Failed to persist material theme - Reverting change", e);
    }
  }

  private _adjustBodyClasses() {
    if (this.theme().darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    if (this.theme().materialV3) {
      document.body.classList.add("m3-theme");
      document.body.classList.remove("m2-theme");
    } else {
      document.body.classList.add("m2-theme");
      document.body.classList.remove("m3-theme");
    }
  }
}
