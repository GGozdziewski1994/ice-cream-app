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
    const existingCartIceCreamIndex = state.iceCream.findIndex(
      (ice) => ice.id === action.id
    );

    const existingIceCream = state.iceCream[existingCartIceCreamIndex];
    let updatedIceCrames;

    if (existingIceCream) {
      const updatedIceCrame = {
        ...existingIceCream,
        amount: existingIceCream.amount + action.amount,
      };
      updatedIceCrames = [...state.iceCream];
      updatedIceCrames[existingCartIceCreamIndex] = updatedIceCrame;
    } else {
      updatedIceCrames = state.iceCream.concat(action);
    }
    return {
      ...state,
      iceCream: updatedIceCrames,
      total: state.total + action.amount,
    };
  }),

  on(OrderActions.removeIceCream, (state, action) => {
    const existingCartIceCreamIndex = state.iceCream.findIndex(
      (ice) => ice.name === action.name && ice.capacity === action.capacity
    );

    const existingIceCream = state.iceCream[existingCartIceCreamIndex];
    let updatedIceCrames;

    if (existingIceCream.amount === 1) {
      updatedIceCrames = state.iceCream.filter((ice) => ice.id !== action.id);
    } else {
      const updatedIceCrame = {
        ...existingIceCream,
        amount: existingIceCream.amount - 1,
      };
      updatedIceCrames = [...state.iceCream];
      updatedIceCrames[existingCartIceCreamIndex] = updatedIceCrame;
    }

    return {
      ...state,
      iceCream: updatedIceCrames,
      total: state.total - 1,
    };
  })
);
