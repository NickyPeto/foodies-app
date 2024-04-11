import { WritableSignal } from '@angular/core';
import { Subject } from 'rxjs';

export interface IngredientModel {
  name: string;
}

export interface RecipesModel {
  id: string;
  image: string;
  title: string;
  missedIngredients: IngredientModel[];
}

export interface RecipesServiceModel {
  recipes: Subject<RecipesModel[]>;
  parsedIngredients: WritableSignal<string>;

  getRecipeByIngredient: (ingredients: string) => void;

  addIngredientsToList: (ingredients: string) => void;
}
