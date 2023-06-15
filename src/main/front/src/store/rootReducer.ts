import {combineReducers} from '@reduxjs/toolkit';

import adminDmnsReducer from './features/adminDmns/slice';

const rootReducer = combineReducers({
  adminDmns: adminDmnsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
