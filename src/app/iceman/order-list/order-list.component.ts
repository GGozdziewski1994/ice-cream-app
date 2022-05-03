import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface Data {
  email: string;
  iceCream: { name: string; quantity: number }[];
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListComponent implements OnInit {
  public data: Data[] | any = [
    {
      email: 'test@test',
      iceCream: [
        { name: 'Czekoladowe', quantity: 2 },
        { name: 'Waniliowe', quantity: 4 },
      ],
    },
    {
      email: 'test2@test',
      iceCream: [
        { name: 'Czekoladowe', quantity: 2 },
        { name: 'Waniliowe', quantity: 4 },
        { name: 'Truskawkowe', quantity: 5 },
        { name: 'Orzechowe', quantity: 6 },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
