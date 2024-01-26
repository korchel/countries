import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import type { Country } from '../types/types';
import type { RootStateType } from './index';

const path = 'https://restcountries.com/v3.1/all';

export const fetchData = createAsyncThunk(
  'fetch',
  async () => {
    const responce = await axios.get(path);
    console.log(responce.data);
    return responce.data;
  },
);

type LoadingState = 'idle' | 'loading' | 'failed';
interface IState {
  loadingState: LoadingState,
  loadingError: string | undefined,
  data: Country[],
}

const initialState: IState = {
  loadingState: 'idle',
  loadingError: undefined,
  data: [],
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loadingState = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<Country[]>) => {
        state.loadingState = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loadingState = 'failed';
        state.loadingError = action.error.message;
      });
  },
});

export const getloadingState = (state: RootStateType): string => state.loadingSlice.loadingState;
export const getLoadingError = (state: RootStateType): string | undefined => state.loadingSlice.loadingError;
export const getData = (state: RootStateType): Country[] => state.loadingSlice.data;

export default loadingSlice.reducer;
