import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    this.http.put(
      "https://angular-recipe-9640e.firebaseio.com/recipes.json",
      this.recipeService.getRecipes()
    );
  }
}
