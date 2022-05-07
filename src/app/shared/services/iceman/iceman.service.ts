import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { map, take } from 'rxjs';

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
    console.log(date);
    return this.db
      .list(`orders/${date}`)
      .valueChanges()
      .pipe(
        take(1),
        map((el) =>
          el.map((el: any) => {
            return {
              user: el.user,
              order: el.order,
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
    const day = new Date().getDay() + 1;
    return `${year}-${month}-${day}`;
  }
}
