import { Route } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

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
    path: "page-not-found",
    component: PageNotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "/page-not-found",
  },
];
