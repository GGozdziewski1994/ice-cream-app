import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/model/order';
import { OrderActions } from 'src/app/store/order/order.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from 'src/app/shared/services/client/client.service';
@Component({
  selector: 'app-ice-cream-cart',
  templateUrl: './ice-cream-cart.component.html',
  styleUrls: ['./ice-cream-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IceCreamCartComponent implements OnInit {
  public orders$!: Observable<Order[]>;
  public total$!: Observable<number>;
  public FormOrder!: FormGroup;

  constructor(
    private location: Location,
    private store: Store<AppState>,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.initFormOrder();
    this.orders$ = this.store.select((state) => state.order.iceCream);
    this.total$ = this.store.select((state) => state.order.total);
  }

  public onSubmit() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDay() + 1;
    const date = `${year}-${month}-${day}`;
    this.clientService.sendOrder(date, 'order');
  }

  public onClose() {
    this.location.back();
  }

  public addIceCream(iceCream: Order) {
    const order = { ...iceCream, amount: 1 };
    this.store.dispatch(OrderActions.addOrder(order));
  }

  public removeIceCream(iceCream: Order) {
    this.store.dispatch(OrderActions.removeIceCream(iceCream));
  }

  private initFormOrder() {
    this.FormOrder = new FormGroup({
      name: new FormControl(null),
      amount: new FormControl(null),
      capacity: new FormControl(null),
    });
  }
}
