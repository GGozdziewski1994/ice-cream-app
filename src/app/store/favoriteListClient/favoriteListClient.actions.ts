import { createAction, props } from '@ngrx/store';

export const FavoriteListActions = {
  setFavoriteList: createAction(
    '[FavoriteList]',
    props<{ key: string | null; name: string }>()
  ),
  removeFavoriteFromList: createAction(
    '[FavoriteList]',
    props<{ key: string | null; name: string }>()
  ),
};
