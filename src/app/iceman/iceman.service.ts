import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class IcemanService {
  constructor(private apiService: ApiService) {}

  getIceCreamList() {
    return this.apiService.getIceCreamList();
  }

  addIceCream(iceCream: string) {
    return this.apiService.addIceCreamToList(iceCream);
  }

  removeIceCream(iceCream: string) {
    return this.apiService.removeIceCream(iceCream);
  }

  getCapacityList() {
    return this.apiService.getCapacityList();
  }

  addCapacity(capacity: string) {
    return this.apiService.addCapacityToList(capacity);
  }

  removeCapacity(capacity: string) {
    return this.apiService.removeCapacity(capacity);
  }
}
