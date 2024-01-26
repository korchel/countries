import React from 'react';
import { Link } from 'react-router-dom';

import type { ICountryCardProps } from '../types/types';

const CountryCard: React.FC<ICountryCardProps> = ({ name, flag, population, region, capital }) => {
  return (
    <Link to={`/country/${name}`}>
      <div className="countryCard">
        <div className="img-container">
          <img className="flag" src={flag.svg} alt={flag.alt} />
        </div>
        <div className="description">
          <h3>{name}</h3>
          <p><span>Population:</span>{' '}{population}</p>
          <p><span>Region:</span>{' '}{region}</p>
          <p><span>Capital:</span>{' '}{capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
