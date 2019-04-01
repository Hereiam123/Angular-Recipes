import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    return this.http.put(
      "https://angular-recipe-9640e.firebaseio.com/recipes.json",
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http
      .get(
        "https://angular-recipe-9640e.firebaseio.com/recipes.json?auth=" + token
      )
      .subscribe(response => {
        const recipes: Recipe[] = <Recipe[]>response;
        this.recipeService.setRecipes(recipes);
      });
  }
}
