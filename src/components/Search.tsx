import React, { type ChangeEventHandler } from 'react';
import { IoSearch } from 'react-icons/io5';
import Select, { type StylesConfig, type ActionMeta } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import type { Region } from '../types/types';
import type { AppDispatchType } from '../store';
import { getFilterRegion, getSearchCountry, setFilterRegion, setSearchCountry } from '../store/searchSlice';

interface ISelectOption {
  label: Region,
  value: Region,
}

const regions: ISelectOption[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const selectStyles: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'var(--color-elements)',
    color: 'var(--color-text)',
    borderRadius: '0.5rem',
    padding: '0.25rem 0.8rem',
    border: 'none',
    boxShadow: '1px 1px 6px 6px var(--color-shadow)',
    fontFamily: 'Nunito-Sans-SemiBold',
    height: '50px',
    fontSize: '0.8rem',
    width: '200px',
  }),
  option: (baseStyles, { isSelected, isFocused }) => ({
    ...baseStyles,
    border: 'none',
    cursor: 'pointer',
    color: 'var(--color-text)',
    backgroundColor: isSelected || isFocused
      ? 'var(--color-hover)'
      : 'var(--color-elements)',
  }),
}

type onSearch = ChangeEventHandler<HTMLInputElement>;
type onSelect = (newValue: unknown, actionmeta: ActionMeta<unknown>) => void;

const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const region = useSelector(getFilterRegion);
  const country = useSelector(getSearchCountry);

  const handleSearch: onSearch = (event) => {
    dispatch(setSearchCountry(event.target.value));
  };

  const handleSelect: onSelect = (newValue): void => {
    if (!newValue) {
      dispatch(setFilterRegion(''));
    } else {
      if (Array.isArray(newValue)) {
        dispatch(setFilterRegion(''));
      } else {
        dispatch(setFilterRegion(newValue));
      }
    }
  };
  return (
    <div className="controls">
      <div className="search">
        <IoSearch />
        <input
          type='search'
          placeholder='Search for a country...'
          value={country}
          onChange={handleSearch}
          />
      </div>
      <Select
        styles={selectStyles}
        className="select"
        options={regions}
        placeholder="Filter by Region"
        isClearable={true}
        isSearchable={false}
        value={region ? { value: region, label: region } : ''}
        onChange={handleSelect}
      />
    </div>
  );
};

export default Search;
