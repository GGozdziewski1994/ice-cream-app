import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { map, take } from 'rxjs';
import { UserOrder } from '../../model/userOrde';

@Injectable({
  providedIn: 'root',
})
export class IcemanService {
  private iceCreamRef!: AngularFireList<any>;
  private capacityRef!: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.iceCreamRef = this.db.list('ice-cream-option');
    this.capacityRef = this.db.list('capacity-option');
  }

  public getOrdersList() {
    const date = this.getDate();
    return this.db
      .list(`orders/${date}`)
      .valueChanges()
      .pipe(
        take(1),
        map((el: any) =>
          el.map((order: UserOrder) => {
            return {
              user: order.user,
              order: order.order,
            };
          })
        )
      );
  }

  public getIceCreamList() {
    return this.iceCreamRef.snapshotChanges();
  }

  public getCapacityList() {
    return this.capacityRef.snapshotChanges();
  }

  public addIceCreamToList(iceCream: string) {
    this.iceCreamRef.push(iceCream);
  }

  public addCapacityToList(capacity: string) {
    this.capacityRef.push(capacity);
  }

  public removeIceCream(iceCream: string) {
    this.iceCreamRef.remove(iceCream);
  }

  public removeCapacity(capacity: string) {
    this.capacityRef.remove(capacity);
  }

  private getDate() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate() - 1;
    return `${year}-${month}-${day}`;
  }
}
