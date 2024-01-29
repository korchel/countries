import { createSlice } from '@reduxjs/toolkit';

import type { RootStateType } from './index';

export interface ISearchState {
  searchCountry: string,
  filterRegion: string,
}

const initialState: ISearchState = {
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
      state.filterRegion = action.payload.value;
    },
    clearSearch: () => initialState,
  },
});

export const { setSearchCountry, setFilterRegion, clearSearch } = searchSlice.actions;

export const getSearcjCountry = (state: RootStateType): string => state.searchSlice.searchCountry;
export const getFilterRegion = (state: RootStateType): string => state.searchSlice.filterRegion;
export const getSearchParams = (state: RootStateType): ISearchState => {
  return state.searchSlice;
};

export default searchSlice.reducer;
