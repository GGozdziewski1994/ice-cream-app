import { createReducer, on } from '@ngrx/store';
import { OrderActions } from './order.actions';
import { OrderState } from './order.state';

const initialState: OrderState = {
  name: '',
  amount: 0,
  capacity: 0,
};

export const orderReducer = createReducer(
  initialState,
  on(OrderActions.addOrder, (state, action) => {
    return {
      ...state,
      name: action.name,
      amount: action.amount,
      capacity: action.capacity,
    };
  })
);
