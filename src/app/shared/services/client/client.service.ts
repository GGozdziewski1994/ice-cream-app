import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private iceCreamRef!: AngularFireList<any>;
  private capacityRef!: AngularFireList<any>;
  private favoriteIceCream!: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private store: Store) {
    this.iceCreamRef = this.db.list('ice-cream-option');
    this.capacityRef = this.db.list('capacity-option');
    const user = JSON.parse(localStorage.getItem('userData') || '{}');
    const uid = user.uid;
    this.favoriteIceCream = this.db.list(`users/${uid}`);
  }

  public getIceCreamListName() {
    return this.iceCreamRef.valueChanges();
  }

  public getCapacityListValue() {
    return this.capacityRef.valueChanges();
  }

  public getFavoriteIceCream() {
    return this.favoriteIceCream.snapshotChanges();
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
