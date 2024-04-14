import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavLayoutComponent } from "./components/nav-layout/nav-layout.component";
import { SplashScreenComponent } from "./components/splash-screen/splash-screen.component";
import { ThemeSwitcherService } from "./services/theme-switcher/theme-switcher.service";

@Component({
  standalone: true,
  imports: [RouterModule, NavLayoutComponent, SplashScreenComponent],
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // Instantiate the ThemeSwitcherService to make material theme available instantly
  _ = inject(ThemeSwitcherService);
}
