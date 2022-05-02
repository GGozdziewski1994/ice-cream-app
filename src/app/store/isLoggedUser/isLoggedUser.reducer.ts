import { createReducer, on } from '@ngrx/store';
import { isLoggedActions } from './isLoggedUser.actions';
import { isLoggedState } from './isLoggedUser.state';

const initialState: isLoggedState = {
  isClient: false,
  isIceman: false,
};

export const isLoggedReducer = createReducer(
  initialState,
  on(isLoggedActions.setIsClient, (state) => {
    return {
      ...state,
      isClient: true,
    };
  }),
  on(isLoggedActions.setIsIceman, (state) => {
    return {
      ...state,
      isIceman: true,
    };
  })
);
