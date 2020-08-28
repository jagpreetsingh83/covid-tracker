import { Component, Input } from '@angular/core';
import { CardItem } from '../../../models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() cards: CardItem[];
}
