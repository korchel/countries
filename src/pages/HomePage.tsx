import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCountries, getFilteredCountries } from '../store/loadingAllSlice';
import { getSearchParams } from '../store/searchSlice';
import type { AppDispatchType } from '../store';
import CountryCard from '../components/CountryCard';
import type { ICountryCardProps } from '../types/types';
import Search from '../components/Search';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const searchParams = useSelector(getSearchParams);
  const countries = useSelector(getFilteredCountries(searchParams));
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <>
    <Search />
    <div className="flex-container">
      {countries.map((country) => {
        const countryCard: ICountryCardProps = {
          name: country.name.common,
          population: country.population,
          region: country.region,
          capital: country.capital,
          flag: country.flags,
        }
        return <CountryCard key={country.name.common} {...countryCard} />
      }
      )}
    </div>
    </>
  );
};

export default HomePage;
