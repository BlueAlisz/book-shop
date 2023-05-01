import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
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

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
