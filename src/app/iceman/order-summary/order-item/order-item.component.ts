import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Order } from 'src/app/shared/model/order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderItemComponent {
  @Input() summary: Order[] = [];
}
