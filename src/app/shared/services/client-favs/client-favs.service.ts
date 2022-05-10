import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root',
})
export class ClientFavsService {
  private favoriteIceCream!: AngularFireList<any>;
  private user!: User;

  constructor(private db: AngularFireDatabase) {
    this.initFavs();
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

  public initFavs() {
    this.user = JSON.parse(localStorage.getItem('userData') || '{}');
    this.favoriteIceCream = this.db.list(`users/${this.user.uid}/favorite`);
  }
}
