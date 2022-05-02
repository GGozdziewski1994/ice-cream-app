import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { AuthState } from './auth.state';

const initialState: AuthState = {
  isAuth: false,
  isClient: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.setAuth, (state) => {
    return {
      ...state,
      isAuth: true,
    };
  }),
  on(AuthActions.setNotAuth, (state) => {
    return {
      ...state,
      isAuth: false,
    };
  }),
  on(AuthActions.setIsClient, (state) => {
    return {
      ...state,
      isClient: true,
    };
  })
);
