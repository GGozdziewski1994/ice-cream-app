import { createAction, props } from '@ngrx/store';
import { OrderState } from './order.state';

export const OrderActions = {
  addOrder: createAction('[Order], Add order', props<OrderState>()),
};
