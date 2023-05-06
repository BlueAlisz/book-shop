import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'egg',
      'egg from chicken',
      'https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-superJumbo-v2.jpg',
      [new Ingredient('white-egg', 10), new Ingredient('yellow-egg', 10)]
    ),
    new Recipe(
      'egg',
      'egg from chicken',
      'https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-superJumbo-v2.jpg',
      [new Ingredient('white-egg', 5), new Ingredient('yellow-egg', 5)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
