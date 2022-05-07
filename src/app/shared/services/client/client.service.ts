import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { map, take } from 'rxjs';
import { Order } from '../../model/order';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private iceCreamRef!: AngularFireList<any>;
  private capacityRef!: AngularFireList<any>;
  private favoriteIceCream!: AngularFireList<any>;
  private lastOrder!: AngularFireList<any>;
  private email!: string;

  constructor(private db: AngularFireDatabase) {
    this.iceCreamRef = this.db.list('ice-cream-option');
    this.capacityRef = this.db.list('capacity-option');
    const user = JSON.parse(localStorage.getItem('userData') || '{}');
    const uid = user.uid;
    this.email = user.email;
    this.favoriteIceCream = this.db.list(`users/${uid}/favorite`);
    this.lastOrder = this.db.list(`users/${uid}/order`);
  }

  public sendOrder(date: any, order: Order[]) {
    this.db.list(date).push({ user: this.email, ...order });
    this.setLastOrder(order);
  }

  public getLastOrder() {
    return this.lastOrder.snapshotChanges().pipe(
      take(1),
      map((el) => {
        return el.map((order) => order.payload.val());
      })
    );
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
}
