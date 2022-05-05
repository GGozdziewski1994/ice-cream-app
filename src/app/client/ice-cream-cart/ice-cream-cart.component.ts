import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/model/order';
@Component({
  selector: 'app-ice-cream-cart',
  templateUrl: './ice-cream-cart.component.html',
  styleUrls: ['./ice-cream-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IceCreamCartComponent implements OnInit {
  public orders$!: Observable<Order[]>;
  public total$!: Observable<number>;

  constructor(private location: Location, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.orders$ = this.store.select((state) => state.order.iceCream);
    this.total$ = this.store.select((state) => state.order.total);
  }

  public onClose() {
    this.location.back();
  }
}
