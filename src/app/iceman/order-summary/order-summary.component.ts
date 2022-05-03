import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface OrderSummary {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent implements OnInit {
  public orderSummary: OrderSummary[] = [
    { name: 'Waniliowe', quantity: 10 },
    { name: 'Truskawkowe', quantity: 5 },
    { name: 'Czekoladowe', quantity: 15 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
