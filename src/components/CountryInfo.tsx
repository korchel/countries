import React, { useEffect } from 'react';
import type { Country } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getLoadingError, getloadingState, getNeighbors, fetchNeighbors, clearNeighbors } from '../store/loadingNeighborsSlice';
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
    if (borders) {
      dispatch(fetchNeighbors(borders));
    }
    return () => {
      dispatch(clearNeighbors());
    };
  }, [dispatch, borders]);

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
        <div className="btn-group">
          <h3>Border Countries:</h3>
          {loadingState === 'loading' && <h2>Loading neighbors...</h2>}
          {loadingError && <h2>{loadingError}</h2>}
          {Array.isArray(neighbors)
            ? neighbors.map((country) => (
              <Link
                to={`/country/${country}`}
                className="btn"
                key={country}
                onClick={() => { handleClick(country); }}
              >
                {country}
              </Link>
            ))
            : neighbors}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
