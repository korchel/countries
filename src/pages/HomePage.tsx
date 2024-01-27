import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCountries, getCountries } from '../store/loadingAllSlice';
import type { AppDispatchType } from '../store';
import CountryCard from '../components/CountryCard';
import type { ICountryCardProps } from '../types/types';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const countries = useSelector(getCountries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
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
  );
};

export default HomePage;
