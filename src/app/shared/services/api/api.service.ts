import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private iceCreamRef!: AngularFireList<any>;
  private capacityRef!: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.iceCreamRef = this.db.list('ice-cream-option');
    this.capacityRef = this.db.list('capacity-option');
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
}
