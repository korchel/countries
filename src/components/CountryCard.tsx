import React from 'react';

import type { ICountryCardProps } from '../types/types';

const CountryCard: React.FC<ICountryCardProps> = ({ name, flag, population, region, capital }) => {
  console.log(flag);
  return (
    <div className="countryCard">
      <div className="img-container">
        <img className="flag" src={flag.svg} alt={flag.alt} />
      </div>
      <div className="description">
        <h2>{name}</h2>
        <p><span>Population:</span>{' '}{population}</p>
        <p><span>Region:</span>{' '}{region}</p>
        <p><span>Capital:</span>{' '}{capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
