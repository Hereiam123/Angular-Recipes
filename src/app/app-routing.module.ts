import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "recipes", loadChildren: "./recipes/recipe.module#RecipesModule" },
  {
    path: "shopping-list",
    component: ShoppingListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
