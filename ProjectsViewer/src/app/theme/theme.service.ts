import { Injectable } from "@angular/core";
import { Theme, Default } from "./theme";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private active: Theme = Default;
  private availableThemes: Theme[] = [Default];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }
  tryTheme(themeName: string = 'Default'): void {
    if (themeName === Default.name) {
      this.setActiveTheme(Default);
    }
  }

  setLightTheme(): void {
    this.setActiveTheme(Default);
  }

  setActiveTheme(theme: Theme = Default): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}