import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'egg',
      'egg from chicken',
      'https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-superJumbo-v2.jpg'
    ),
    new Recipe(
      'egg',
      'egg from chicken',
      'https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-superJumbo-v2.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
