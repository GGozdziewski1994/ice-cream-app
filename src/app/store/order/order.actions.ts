import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/shared/model/order';
import { OrderState } from './order.state';

export const OrderActions = {
  addOrder: createAction('[Order], Add order', props<Order>()),
  addAllOrder: createAction('[Order], Add all order', props<OrderState>()),
  removeIceCream: createAction(
    '[Order], Remove oredr from cart',
    props<Order>()
  ),
  clearOreder: createAction('[Order], Clear Order'),
};
