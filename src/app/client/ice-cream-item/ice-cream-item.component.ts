import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/shared/model/order';
import { ClientService } from 'src/app/shared/services/client/client.service';
import { AppState } from 'src/app/store/app.state';
import { OrderActions } from 'src/app/store/order/order.actions';

@Component({
  selector: 'app-ice-cream-item',
  templateUrl: './ice-cream-item.component.html',
  styleUrls: ['./ice-cream-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IceCreamItemComponent implements OnInit, OnDestroy {
  public order!: Order;
  public orderForm!: FormGroup;
  public favoriteList!: { key: string | any; name: string }[];
  @Input() public iceCream!: string;
  @Input() public capacity!: number[];
  @Input() public isFavorite!: boolean;
  private subscribction!: Subscription;

  constructor(
    private sotre: Store<AppState>,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.initOrderForm();
    this.subscribction = this.clientService
      .getFavoriteIceCream()
      .subscribe((ice) => (this.favoriteList = ice));
  }

  ngOnDestroy(): void {
    this.subscribction.unsubscribe();
  }

  public onSubmit() {
    if (this.orderForm.value)
      this.order = {
        id: Math.random(),
        name: this.iceCream,
        ...this.orderForm.value,
      };
    this.sotre.dispatch(OrderActions.addOrder(this.order));
    this.orderForm.reset();
  }

  public switchIsFavorite(name: string) {
    const index = this.favoriteList.findIndex((el) => el.name === name);
    const iceCream = this.favoriteList[index];

    if (iceCream) {
      this.clientService.removeIceCreamToFavorite(iceCream.key);
    } else {
      this.clientService.addIceCreamToFavorite(name);
    }

    // this.clientService
    //   .getFavoriteIceCream()
    //   .pipe(
    //     take(1),
    //     map((el) => {
    //       return {
    //         isFav: el.some((ice) => ice.name === name),
    //         name: el,
    //       };
    //     })
    //   )
    //   .subscribe((ice) => {
    //     console.log(ice);
    //     if (ice.isFav) {
    //       console.log(key, name);
    //       this.clientService.removeIceCreamToFavorite(key);
    //     } else {
    //       this.clientService.addIceCreamToFavorite(name);
    //     }
    //   });
  }

  private initOrderForm() {
    this.orderForm = new FormGroup({
      amount: new FormControl(null),
      capacity: new FormControl(null),
    });
  }
}
