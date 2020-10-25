import { createAction, props } from '@ngrx/store';

export const loginUser = createAction('[User] Login User', (user: User) => ({ user }));
export const logoutUser = createAction('[User] Logout User');




