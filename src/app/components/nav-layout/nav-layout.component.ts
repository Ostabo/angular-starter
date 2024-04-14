import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { AsyncPipe } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { MatLabel } from "@angular/material/form-field";
import { MatTooltip } from "@angular/material/tooltip";
import { toSignal } from "@angular/core/rxjs-interop";
import { shareReplay } from "rxjs";
import { map } from "rxjs/operators";
import { ThemeSwitcherService } from "../../services/theme-switcher/theme-switcher.service";
import { SplashScreenComponent } from "../splash-screen/splash-screen.component";

@Component({
  selector: "app-nav-layout",
  templateUrl: "./nav-layout.component.html",
  styleUrl: "./nav-layout.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    RouterOutlet,
    MatSlideToggle,
    MatLabel,
    MatTooltip,
    SplashScreenComponent,
  ],
})
export class NavLayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);
  themeStore = inject(ThemeSwitcherService);

  darkMode = computed(() => this.themeStore.theme().darkMode);
  materialV3 = computed(() => this.themeStore.theme().materialV3);

  isHandset = toSignal(
    this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay(),
    ),
  );
}
