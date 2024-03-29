import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import type { Country } from '../types/types';
import type { RootStateType } from './index';
import paths from '../paths';

export const fetchNeighbors = createAsyncThunk(
  'fetchNeighbors',
  async (countryCodes: string[]) => {
    const responce = await axios.get(paths.neighbors(countryCodes));
    return responce.data;
  },
);

type LoadingState = 'idle' | 'loading' | 'failed';
interface IState {
  loadingState: LoadingState,
  loadingError: string | null,
  neighbors: string | string[],
}

const initialState: IState = {
  loadingState: 'idle',
  loadingError: null,
  neighbors: 'none',
};

const loadingNeighborsSlice = createSlice({
  name: 'loadingNeighbors',
  initialState,
  reducers: {
    clearNeighbors: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNeighbors.pending, (state) => {
        state.loadingState = 'loading';
        state.loadingError = null;
      })
      .addCase(fetchNeighbors.fulfilled, (state, action: PayloadAction<Country[]>) => {
        state.loadingState = 'idle';
        state.neighbors = action.payload.map((country) => country.name.common);
      })
      .addCase(fetchNeighbors.rejected, (state, action) => {
        state.loadingState = 'failed';
        state.loadingError = action.error.message ?? 'Error';
      });
  },
});

export const { clearNeighbors } = loadingNeighborsSlice.actions;

export const getloadingState = (state: RootStateType): string => state.loadingNeighborsSlice.loadingState;
export const getLoadingError = (state: RootStateType): string | null => state.loadingNeighborsSlice.loadingError;
export const getNeighbors = (state: RootStateType): string | string[] => state.loadingNeighborsSlice.neighbors;

export default loadingNeighborsSlice.reducer;
