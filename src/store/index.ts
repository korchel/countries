import { configureStore } from '@reduxjs/toolkit';
import loadingSlice from './loadingSlice';

const store = configureStore({
  reducer: {
    loadingSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch;

export default store;
