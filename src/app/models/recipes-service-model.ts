import { Signal, WritableSignal } from '@angular/core';
import { Subject } from 'rxjs';

export interface RecipesServiceModel {
  $recipes: Subject<any>;
  parsedIngredients: WritableSignal<string>;

  getRecipeByIngredient: (ingredients: string) => void;

  addIngredientsToList: (ingredients: string) => void;
}
