import { configureStore, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {ThunkAction} from 'redux-thunk';

import rootReducer, {RootState} from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;

export const useAppDispatch: () => AppDispatch = useDispatch;
