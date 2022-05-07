import { Order } from './order';

export interface UserOrder {
  user: string;
  order: Order[];
}
