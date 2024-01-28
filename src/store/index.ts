import { configureStore } from '@reduxjs/toolkit';
import loadingAllSlice from './loadingAllSlice';
import loadingCountrySlice from './loadingCountrySlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    loadingAllSlice,
    loadingCountrySlice,
    searchSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch;

export default store;
