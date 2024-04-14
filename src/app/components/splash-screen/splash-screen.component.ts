import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: "app-splash-screen",
  standalone: true,
  imports: [CommonModule, MatProgressSpinner],
  templateUrl: "./splash-screen.component.html",
  styleUrl: "./splash-screen.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashScreenComponent {}
