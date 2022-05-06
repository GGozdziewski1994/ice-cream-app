import { AuthState } from './auth/auth.state';
import { FavoriteListState } from './favoriteListClient/favoriteListClientstate.state';
import { isLoggedState } from './isLoggedUser/isLoggedUser.state';
import { OrderState } from './order/order.state';

export interface AppState {
  auth: AuthState;
  isLogged: isLoggedState;
  order: OrderState;
  favoriteList: FavoriteListState;
}
