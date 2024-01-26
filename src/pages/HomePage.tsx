import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData, getData } from '../store/loadingSlice';
import type { AppDispatchType } from '../store';
import CountryCard from '../components/CountryCard';
import type { ICountryCardProps } from '../types/types';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const countries = useSelector(getData);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="container flex-container">
      {countries.map((country) => {
        console.log(country.capital);
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
