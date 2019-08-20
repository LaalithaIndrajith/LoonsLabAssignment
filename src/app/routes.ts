import { Routes } from "@angular/router";
import { HomeComponent } from "./Home/Home.component";
import { SearchComponent } from "./Search/Search.component";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "search_restuarant", component: SearchComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];
