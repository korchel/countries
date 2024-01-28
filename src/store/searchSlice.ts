import { createSlice } from '@reduxjs/toolkit';

import type { RootStateType } from './index';

interface IState {
  searchCountry: string,
  filterRegion: string,
}

const initialState: IState = {
  searchCountry: '',
  filterRegion: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchCountry: (state, action) => {
      state.searchCountry = action.payload;
    },
    setFilterRegion: (state, action) => {
      state.filterRegion = action.payload;
    },
    clearSearch: () => initialState,
  },
});

export const { setSearchCountry, setFilterRegion, clearSearch } = searchSlice.actions;

export const getSearcjCountry = (state: RootStateType): string => state.searchSlice.searchCountry;
export const getFilterRegion = (state: RootStateType): string => state.searchSlice.filterRegion;

export default searchSlice.reducer;
