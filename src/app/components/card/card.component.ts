import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, MatCardModule],
  standalone: true,
})
export class CardComponent {
  @Input()
  title: string = '';

  @Input()
  imgSrc: string = '';
}
