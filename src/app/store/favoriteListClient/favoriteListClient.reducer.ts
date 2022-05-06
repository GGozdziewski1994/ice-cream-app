import { createReducer, on } from '@ngrx/store';
import { FavoriteListActions } from './favoriteListClient.actions';
import { FavoriteListState } from './favoriteListClientstate.state';

const initialState: FavoriteListState = {
  favorite: [],
};

export const favoriteListReducer = createReducer(
  initialState,
  on(FavoriteListActions.setFavoriteList, (state, action) => {
    const existingIceCreamIndex = state.favorite.findIndex(
      (ice) => ice.name === action.name
    );

    const existingIceCream = state.favorite[existingIceCreamIndex];
    let updatedIceCrames;

    if (existingIceCream) {
      const updatedIceCrame = {
        ...existingIceCream,
      };
      updatedIceCrames = [...state.favorite];
      updatedIceCrames[existingIceCreamIndex] = updatedIceCrame;
    } else {
      updatedIceCrames = state.favorite.concat(action);
    }

    return {
      ...state,
      favorite: updatedIceCrames,
    };
  }),

  on(FavoriteListActions.removeFavoriteFromList, (state, action) => {
    console.log('as');
    return {
      favorite: [...state.favorite],
    };
  })
);
