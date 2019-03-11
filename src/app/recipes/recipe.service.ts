import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Chicken",
      "Bake it",
      "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/64e872a051ef678757dd5534fae158e41d754b28"
    ),
    new Recipe(
      "Frank",
      "Cover in Cheese",
      "https://firebasestorage.googleapis.com/v0/b/invue-7e579.appspot.com/o/hot_dog.jpg?alt=media&token=dcb13637-769f-494b-aac5-1dd9ee78d8a7"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
