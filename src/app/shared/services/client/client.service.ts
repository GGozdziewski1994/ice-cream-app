import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { OrderActions } from 'src/app/store/order/order.actions';
import { Order } from '../../model/order';
import { User } from '../../model/user';

interface UserOrder {
  user: string;
  orders: Order[];
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private iceCreamRef!: AngularFireList<any>;
  private capacityRef!: AngularFireList<any>;
  private favoriteIceCream!: AngularFireList<any>;
  private lastOrder!: AngularFireList<any>;
  private user!: User;

  constructor(private db: AngularFireDatabase, private store: Store) {
    this.init();
  }

  public checkShippedOrder() {
    const date = this.getDate();
    return this.db
      .list(date)
      .valueChanges()
      .pipe(
        map((el: any) =>
          el.some((el: UserOrder) => el.user === this.user.email)
        )
      );
  }

  public sendOrder(order: Order[]) {
    const date = this.getDate();
    const userOrder: UserOrder = {
      user: this.user.email,
      orders: [...order],
    };
    this.db.list(date).push(userOrder);
    this.setLastOrder(order);
  }

  public getLastOrder() {
    return this.lastOrder
      .snapshotChanges()
      .pipe(
        take(1),
        map((el) => {
          return el.map((order) => order.payload.val());
        })
      )
      .subscribe((arrayOrder) => {
        arrayOrder.flatMap((orders) => {
          orders.map((order: Order) => {
            this.store.dispatch(OrderActions.addOrder(order));
          });
        });
      });
  }

  public setLastOrder(order: Order[]) {
    this.lastOrder.remove();
    this.lastOrder.push(order);
  }

  public getIceCreamListName() {
    return this.iceCreamRef.valueChanges();
  }

  public getCapacityListValue() {
    return this.capacityRef.valueChanges();
  }

  public getFavoriteIceCream() {
    return this.favoriteIceCream.snapshotChanges().pipe(
      map((el) =>
        el.map((ice) => {
          return { key: ice.key, name: ice.payload.val() };
        })
      )
    );
  }

  public getFavoriteList() {
    return this.favoriteIceCream.valueChanges();
  }

  public addIceCreamToFavorite(iceCream: string) {
    return this.favoriteIceCream.push(iceCream);
  }

  public removeIceCreamToFavorite(iceCream: string) {
    return this.favoriteIceCream.remove(iceCream);
  }

  public init() {
    this.iceCreamRef = this.db.list('ice-cream-option');
    this.capacityRef = this.db.list('capacity-option');
    this.user = JSON.parse(localStorage.getItem('userData') || '{}');
    this.favoriteIceCream = this.db.list(`users/${this.user.uid}/favorite`);
    this.lastOrder = this.db.list(`users/${this.user.uid}/order`);
  }

  private getDate() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDay() + 1;
    return `${year}-${month}-${day}`;
  }
}
