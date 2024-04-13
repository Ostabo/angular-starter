import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-page-not-found",
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: "./page-not-found.component.html",
  styleUrl: "./page-not-found.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
