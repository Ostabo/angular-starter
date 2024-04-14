import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { Router } from "@angular/router";
import { MatCard, MatCardSubtitle, MatCardTitle } from "@angular/material/card";

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
  ],
  templateUrl: "./page-not-found.component.html",
  styleUrl: "./page-not-found.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {
  router = inject(Router);

  async returnHome() {
    await this.router.navigateByUrl("/");
  }
}
