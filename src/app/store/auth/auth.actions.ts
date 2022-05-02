import { createAction } from '@ngrx/store';

export const AuthActions = {
  setAuth: createAction('[Auth], Set Authenticated'),
  setNotAuth: createAction('[Auth], Set Not Authenticated'),
  setIsClient: createAction('[Auth], Set isClient'),
};
