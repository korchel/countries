import React from 'react';
import type { Country } from '../types/types';

const CountryInfo: React.FC<Country> = (country) => {
  const {
    name,
    population,
    region,
    subRegion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags,
  } = country;
  return (
    <div className="info-block">
      <div className="img-container">
        <img className="flag" src={flags.svg} />
      </div>
      <div className="description">
        <h1>{name.common}</h1>
        <ul>
          <li><span>Native Name:</span>{' '}{Object.values(name.nativeName).map((n) => n.common).join(', ')}</li>
          <li><span>Population:</span>{' '}{population}</li>
          <li><span>Region:</span>{' '}{region}</li>
          <li><span>Sub Region:</span>{' '}{subRegion}</li>
          <li><span>Capital:</span>{' '}{capital.join(', ')}</li>
          <li><span>Top Level Domain:</span>{' '}{tld.join(', ')}</li>
          <li><span>Currencies:</span>{' '}{Object.values(currencies).map((c) => c.name).join(', ')}</li>
          <li><span>Languages:</span>{' '}{Object.values(languages).join(', ')}</li>
        </ul>
        <div>
          {borders.map((b) => (
            <button key="b">{b}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
