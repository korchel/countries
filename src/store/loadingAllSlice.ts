import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import type { Country } from '../types/types';
import type { RootStateType } from './index';
import paths from '../paths';

export const fetchCountries = createAsyncThunk(
  'fetch',
  async () => {
    const responce = await axios.get(paths.all());
    return responce.data;
  },
);

type LoadingState = 'idle' | 'loading' | 'failed';
interface IState {
  loadingState: LoadingState,
  loadingError: string | null,
  countries: Country[],
}

const initialState: IState = {
  loadingState: 'idle',
  loadingError: null,
  countries: [],
};

const loadingAllSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loadingState = 'loading';
        state.loadingError = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<Country[]>) => {
        state.loadingState = 'idle';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loadingState = 'failed';
        state.loadingError = action.error.message ?? 'Error';
      });
  },
});

export const getloadingState = (state: RootStateType): string => state.loadingAllSlice.loadingState;
export const getLoadingError = (state: RootStateType): string | null => state.loadingAllSlice.loadingError;
export const getCountries = (state: RootStateType): Country[] => state.loadingAllSlice.countries;

export default loadingAllSlice.reducer;
