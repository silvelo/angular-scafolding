import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';


export const userFeatureKey = 'user';


export const initialState: UserState = {
  username: null,
};


const userReducer = createReducer(
  initialState,
  on(UserActions.loginUser, (state: UserState, { user }) =>
    ({
      ...state,
      ...user
    })),
  on(UserActions.logoutUser, (state) => ({ ...state, ...initialState }))

);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

