import { createReducer, on } from '@ngrx/store';
import { OrderActions } from './order.actions';
import { OrderState } from './order.state';

const initialState: OrderState = {
  iceCream: [],
  total: 0,
};

export const orderReducer = createReducer(
  initialState,
  on(OrderActions.addOrder, (state, action) => {
    return {
      ...state,
      iceCream: [...state.iceCream, action],
      total: state.total + action.amount,
    };
  })
);
