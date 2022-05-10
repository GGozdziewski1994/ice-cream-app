import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, take } from 'rxjs';
import { UserOrder } from '../../model/userOrde';

@Injectable({
  providedIn: 'root',
})
export class IcemanService {
  constructor(private db: AngularFireDatabase) {}

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

  private getDate() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate() - 1;
    return `${year}-${month}-${day}`;
  }
}
