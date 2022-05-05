import { Order } from 'src/app/shared/model/order';

export interface OrderState {
  iceCream: Order[];
  total: number;
}
