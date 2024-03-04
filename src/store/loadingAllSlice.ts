import { createSlice, createAsyncThunk, type PayloadAction, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

import type { Country } from '../types/types';
import type { RootStateType } from './index';
import paths from '../paths';
import type { ISearchState } from './searchSlice';

export const fetchCountries = createAsyncThunk(
  'fetchAll',
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

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const getFilteredCountries = (searchParams: ISearchState) => createSelector(
  [getCountries],
  (countries: Country[]) => countries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchParams.searchCountry.toLowerCase()) && country.region.includes(searchParams.filterRegion);
  }),
);

export default loadingAllSlice.reducer;
