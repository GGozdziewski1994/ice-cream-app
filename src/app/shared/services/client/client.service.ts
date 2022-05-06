import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private iceCreamRef!: AngularFireList<any>;
  private capacityRef!: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.iceCreamRef = this.db.list('ice-cream-option');
    this.capacityRef = this.db.list('capacity-option');
  }

  public getIceCreamListName() {
    return this.iceCreamRef.valueChanges();
  }

  public getCapacityListValue() {
    return this.capacityRef.valueChanges();
  }
}
