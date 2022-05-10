import { Order } from './order';

export interface UserOrder {
  email: string;
  user?: string;
  order: Order[];
}
