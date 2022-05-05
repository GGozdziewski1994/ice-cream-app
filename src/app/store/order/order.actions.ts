import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/shared/model/order';

export const OrderActions = {
  addOrder: createAction('[Order], Add order', props<Order>()),
};
