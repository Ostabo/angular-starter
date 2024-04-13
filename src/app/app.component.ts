import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavLayoutComponent } from "./components/nav-layout/nav-layout.component";

@Component({
  standalone: true,
  imports: [RouterModule, NavLayoutComponent],
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {}
