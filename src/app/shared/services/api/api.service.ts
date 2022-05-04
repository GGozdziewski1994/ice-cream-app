import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private iceCreamRef!: AngularFireList<Observable<string>>;
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
    const iceCreamRef = this.db.list('ice-cream-option');
    iceCreamRef.push(iceCream);
  }

  public addCapacityToList(capacity: string) {
    const capacityRef = this.db.list('capacity-option');
    capacityRef.push(capacity);
  }

  public removeIceCream(iceCream: string) {
    const iceCreamRef = this.db.list('ice-cream-option');
    iceCreamRef.remove(iceCream);
  }

  public removeCapacity(capacity: string) {
    const capacityRef = this.db.list('capacity-option');
    capacityRef.remove(capacity);
  }
}
