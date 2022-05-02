import { createAction } from '@ngrx/store';

export const isLoggedActions = {
  setIsClient: createAction('[IsLogged], Set isClient'),
  setIsIceman: createAction('[isLogged], Set isIceman'),
};
