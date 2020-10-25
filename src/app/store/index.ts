import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { environment } from '../../environments/environment';

import * as fromUser from './user/user.reducers';


export interface AppState {
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.reducer
};

export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<any> {
  return localStorageSync({ keys: [fromUser.userFeatureKey], rehydrate: true })(reducer);
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];
