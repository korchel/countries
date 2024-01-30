import React, { useEffect } from 'react';
import type { Country } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getLoadingError, getloadingState, getNeighbors, fetchNeighbors } from '../store/loadingNeighborsSlice';
import type { AppDispatchType } from '../store';
import { fetchCountry } from '../store/loadingCountrySlice';

const CountryInfo: React.FC<Country> = (country) => {
  const dispatch = useDispatch<AppDispatchType>();
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags,
  } = country;

  const loadingState = useSelector(getloadingState);
  const loadingError = useSelector(getLoadingError);
  const neighbors = useSelector(getNeighbors);

  useEffect(() => {
    dispatch(fetchNeighbors(borders));
  }, [dispatch, neighbors]);

  const handleClick = (name: string): void => {
    dispatch(fetchCountry(name));
  };

  return (
    <div className="info-block">
      <div className="img-container">
        <img className="flag" src={flags.svg} />
      </div>
      <div className="description">
        <h1>{name.common}</h1>
        <ul>
          <li><span>Native Name:</span>{' '}{Object.values(name.nativeName).map((n) => n.common)}</li>
          <li><span>Population:</span>{' '}{population}</li>
          <li><span>Region:</span>{' '}{region}</li>
          <li><span>Sub Region:</span>{' '}{subregion}</li>
          <li><span>Capital:</span>{' '}{capital?.join(', ')}</li>
          <li><span>Top Level Domain:</span>{' '}{tld.join(', ')}</li>
          <li><span>Currencies:</span>{' '}{Object.values(currencies).map((c) => c.name).join(', ')}</li>
          <li><span>Languages:</span>{' '}{Object.values(languages).join(', ')}</li>
        </ul>
        <div>
          {loadingState === 'loading' && <h2>Loading neighbors...</h2>}
          {loadingError && <h2>{loadingError}</h2>}
          {neighbors.length > 0 && neighbors.map((country) => (
            <Link
              to={`/country/${country}`}
              key={country}
              onClick={() => { handleClick(country); }}
            >
              {country}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
