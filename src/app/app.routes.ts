import { Route } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const appRoutes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/dashboard",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];
