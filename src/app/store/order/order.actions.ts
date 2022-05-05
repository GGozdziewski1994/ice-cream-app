import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/shared/model/order';

export const OrderActions = {
  addOrder: createAction('[Order], Add order', props<Order>()),
  removeIceCream: createAction(
    '[Order], Remove oredr from cart',
    props<Order>()
  ),
};
