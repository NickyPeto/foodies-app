import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  imports: [CommonModule, MatChipsModule],
  standalone: true,
})
export class ChipComponent {
  @Input()
  ingredient: string = '';
}
