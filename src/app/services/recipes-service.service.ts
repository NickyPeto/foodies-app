import { Injectable, OnDestroy, signal, WritableSignal } from '@angular/core';
import {
  RecipesModel,
  RecipesServiceModel,
} from '../models/recipes-service-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService implements RecipesServiceModel, OnDestroy {
  private readonly cancellation = new Subject<boolean>();
  readonly recipes: Subject<RecipesModel[]> = new Subject<RecipesModel[]>();

  $recipes: Observable<RecipesModel[]> = this.recipes.asObservable();

  parsedIngredients: WritableSignal<string> = signal('');
  concatSignals: WritableSignal<string[]> = signal(['']);

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    this.cancellation.next(true);
    this.cancellation.complete();
  }

  getRecipeByIngredient(): void {
    this.http
      .get(
        `${environment.apiUrl}?apiKey=${
          environment.apiKey
        }&ingredients=${this.parsedIngredients()}`
      )
      .pipe(takeUntil(this.cancellation))
      .subscribe((value) => this.recipes.next(value as RecipesModel[]));
  }

  addIngredientsToList(ingredient: string) {
    const updatedIngredientList = this.concatSignals.update((value) => [
      ...value,
      ingredient,
    ]);
    //We shape the list of ingredients to give it the form the API expects
    this.parsedIngredients.update((ing) => ingredient.concat(`,+${ing}`));

    return updatedIngredientList;
  }

  clearIngredientsInput() {
    this.parsedIngredients.set('');
    this.concatSignals.set(['']);
    this.recipes.next([] as RecipesModel[]);
  }
}
