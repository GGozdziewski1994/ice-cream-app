import { AuthState } from './auth/auth.state';
import { isLoggedState } from './isLoggedUser/isLoggedUser.state';

export interface AppState {
  auth: AuthState;
  isLogged: isLoggedState;
}
