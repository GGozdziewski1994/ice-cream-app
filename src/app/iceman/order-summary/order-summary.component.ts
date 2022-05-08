import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from 'src/app/shared/model/order';
import { UserOrder } from 'src/app/shared/model/userOrde';
import { IcemanService } from 'src/app/shared/services/iceman/iceman.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent implements OnInit {
  public orderSummary$!: Observable<Order[]>;
  public array!: Order[];

  constructor(private icemnaService: IcemanService) {}

  ngOnInit(): void {
    this.orderSummary$ = this.icemnaService
      .getOrdersList()
      .pipe(map((el) => this.getOrderSummaryList(el)));
  }

  private getOrderSummaryList(el: UserOrder[]) {
    const arr: Order[] = [];
    el.flatMap((order: UserOrder) =>
      order.order.flatMap((order) => {
        arr.push(order);
      })
    );
    let updateIces: Order[] = [];
    for (let order of arr) {
      const existIndex = updateIces.findIndex(
        (el) => el.name === order.name && el.capacity === order.capacity
      );

      const exist = updateIces[existIndex];

      if (exist) {
        const updateIce = {
          ...exist,
          amount: exist.amount + order.amount,
        };
        updateIces[existIndex] = updateIce;
      } else {
        updateIces = updateIces.concat(order);
      }
    }
    return updateIces;
  }
}
