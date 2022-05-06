import { Injectable, OnDestroy } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FavoriteListActions } from 'src/app/store/favoriteListClient/favoriteListClient.actions';

@Injectable({
  providedIn: 'root',
})
export class ClientService implements OnDestroy {
  private iceCreamRef!: AngularFireList<any>;
  private capacityRef!: AngularFireList<any>;
  private favoriteIceCream!: AngularFireList<any>;
  private subscription!: Subscription;

  constructor(private db: AngularFireDatabase, private store: Store) {
    this.iceCreamRef = this.db.list('ice-cream-option');
    this.capacityRef = this.db.list('capacity-option');
    const user = JSON.parse(localStorage.getItem('userData') || '{}');
    const uid = user.uid;
    this.favoriteIceCream = this.db.list(`users/${uid}`);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  public addIceCreamToFavorite(iceCream: string) {
    return this.favoriteIceCream.push(iceCream);
  }

  public removeIceCreamToFavorite(iceCream: string) {
    return this.favoriteIceCream.remove(iceCream);
  }
}
