import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IngredientModel } from 'src/app/models/recipes-service-model';
import { ChipComponent } from '../chip/chip.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, MatCardModule, ChipComponent],
  standalone: true,
})
export class CardComponent {
  @Input()
  title: string = '';

  @Input()
  imgSrc: string = '';

  @Input()
  missingIngredients: IngredientModel[] = [];
}
