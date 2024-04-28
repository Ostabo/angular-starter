import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { Router } from "@angular/router";
import { MatCard, MatCardSubtitle, MatCardTitle } from "@angular/material/card";
import { ThemeSwitcherService } from "../../services/theme-switcher/theme-switcher.service";

@Component({
  selector: "app-page-not-found",
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    NgOptimizedImage,
  ],
  templateUrl: "./page-not-found.component.html",
  styleUrl: "./page-not-found.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements AfterViewInit {
  router = inject(Router);
  primaryColor = signal<string>("#1976d2");

  themeService = inject(ThemeSwitcherService);

  constructor() {
    effect(
      () => {
        this.themeService.theme();
        this.ngAfterViewInit();
      },
      { allowSignalWrites: true },
    );
  }

  @ViewChild("primary", { static: true, read: ElementRef })
  primaryButton?: ElementRef;

  ngAfterViewInit(): void {
    this.primaryColor.set(
      getComputedStyle(this.primaryButton!.nativeElement).backgroundColor,
    );
  }

  async returnHome() {
    await this.router.navigateByUrl("/");
  }
}
