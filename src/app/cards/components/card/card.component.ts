import { Component, Input } from '@angular/core';
import { CardItem } from '../../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() item: CardItem;

  get cssClass() {
    return this.item.type.toLowerCase();
  }
}
