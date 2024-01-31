import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import type { Country } from '../types/types';
import type { RootStateType } from './index';
import paths from '../paths';

export const fetchCountry = createAsyncThunk(
  'fetchCountry',
  async (name: string) => {
    const responce = await axios.get(paths.country(name));
    return responce.data;
  },
);

type LoadingState = 'idle' | 'loading' | 'failed';
interface IState {
  loadingState: LoadingState,
  loadingError: string | null,
  country: Country | null,
}

const initialState: IState = {
  loadingState: 'idle',
  loadingError: null,
  country: null,
};

const loadingCountrySlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    clearCountry: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.loadingState = 'loading';
        state.loadingError = null;
      })
      .addCase(fetchCountry.fulfilled, (state, action: PayloadAction<[Country]>) => {
        const [country] = action.payload;
        state.loadingState = 'idle';
        state.country = country;
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.loadingState = 'failed';
        state.loadingError = action.error.message ?? 'Error';
      });
  },
});

export const { clearCountry } = loadingCountrySlice.actions;

export const getloadingState = (state: RootStateType): string => state.loadingCountrySlice.loadingState;
export const getLoadingError = (state: RootStateType): string | null => state.loadingCountrySlice.loadingError;
export const getCountry = (state: RootStateType): Country | null => state.loadingCountrySlice.country;

export default loadingCountrySlice.reducer;
