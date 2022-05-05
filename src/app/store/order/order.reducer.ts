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
    const existingCartIndex = state.iceCream.findIndex(
      (el) => el.name === action.name && el.capacity === action.capacity
    );

    const existingCart = state.iceCream[existingCartIndex];
    let updatedIceCrames;

    if (existingCart) {
      const updatedIceCrame = {
        ...existingCart,
        amount: existingCart.amount + action.amount,
      };
      updatedIceCrames = [...state.iceCream];
      updatedIceCrames[existingCartIndex] = updatedIceCrame;
    } else {
      updatedIceCrames = state.iceCream.concat(action);
    }
    return {
      ...state,
      iceCream: updatedIceCrames,
      total: state.total + action.amount,
    };
  })
);
