import { configureStore } from '@reduxjs/toolkit';
import loadingAllSlice from './loadingAllSlice';
import loadingCountrySlice from './loadingCountrySlice';

const store = configureStore({
  reducer: {
    loadingAllSlice,
    loadingCountrySlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch;

export default store;
