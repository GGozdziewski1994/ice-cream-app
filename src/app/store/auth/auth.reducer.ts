import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { AuthState } from './auth.state';

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.setAuth, (state) => {
    return {
      ...state,
      isAuthenticated: true,
    };
  }),
  on(AuthActions.setNotAuth, (state) => {
    return {
      ...state,
      isAuthenticated: false,
    };
  })
);
