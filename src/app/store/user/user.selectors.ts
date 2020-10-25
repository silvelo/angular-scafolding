import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducers';

export const selectUserState = createFeatureSelector<UserState>(fromUser.userFeatureKey);

export const selectUsers = createSelector(selectUserState, (state: UserState) => state);
