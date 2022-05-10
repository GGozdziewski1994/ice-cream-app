import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { UserOrder } from 'src/app/shared/model/userOrder';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListItemComponent {
  @Input() orders!: UserOrder[];
}
