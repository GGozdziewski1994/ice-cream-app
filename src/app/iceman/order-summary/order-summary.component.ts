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

  constructor(private icemnaService: IcemanService) {}

  ngOnInit(): void {
    this.orderSummary$ = this.icemnaService.getOrdersList().pipe(
      map((el) =>
        el.flatMap((order: UserOrder) =>
          order.order.flatMap((order) => {
            const array: Order[] = [];
            const existIndex = array.findIndex(
              (el) => el.name === order.name && el.capacity === order.capacity
            );
            const exist = array[existIndex];
            let updateIces: Order[] = [];

            if (exist) {
              const updateIce = {
                ...exist,
                amounnt: exist.amount + order.amount,
              };
              updateIces = [...array];
              updateIces[existIndex] = updateIce;
            } else {
              updateIces = array.concat(order);
            }
            return updateIces;
          })
        )
      )
    );
  }
}
