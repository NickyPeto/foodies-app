import { HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipes-service.service';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CardComponent } from 'src/app/components/card/card.component';
import { ChipComponent } from 'src/app/components/chip/chip.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ButtonComponent,
    CardComponent,
    ChipComponent,
  ],
  providers: [RecipesService],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  ingredient: WritableSignal<string> = signal('');
  ingredients: WritableSignal<string[]> = signal(['']);
  $recipes: Observable<any>;

  constructor(private recipeService: RecipesService) {
    this.ingredients = this.recipeService.concatSignals;
    this.$recipes = this.recipeService.recipesObservable;
  }

  getRecipes() {
    this.recipeService.getRecipeByIngredient();
  }

  addIngredient(ingredient: string) {
    this.recipeService.addIngredientsToList(ingredient);
  }

  clearSelection() {
    this.recipeService.clearIngredientsInput();
  }
}
