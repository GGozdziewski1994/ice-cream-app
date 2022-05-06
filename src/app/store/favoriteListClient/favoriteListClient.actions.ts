import { createAction, props } from '@ngrx/store';

export const FavoriteListActions = {
  setFavoriteList: createAction(
    '[FavoriteList] set Favorite List',
    props<{ key: string | null; name: string }>()
  ),
  removeFavoriteFromList: createAction(
    '[FavoriteList] Remove from Favorite List',
    props<{ key: string | null; name: string }>()
  ),
};
