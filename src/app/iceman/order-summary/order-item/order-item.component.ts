import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { OrderSummary } from '../order-summary.component';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderItemComponent implements OnInit {
  @Input() summary: OrderSummary[] = [];

  constructor() {}

  ngOnInit(): void {}
}
