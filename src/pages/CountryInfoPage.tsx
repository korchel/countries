import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { fetchCountry, getCountry, getloadingState, getLoadingError } from '../store/loadingCountrySlice';
import type { AppDispatchType } from '../store';
import CountryInfo from '../components/CountryInfo';

const CountryInfoPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const navigate = useNavigate();

  const { name } = useParams();
  const country = useSelector(getCountry);
  const loadingState = useSelector(getloadingState);
  const loadingError = useSelector(getLoadingError);

  useEffect(() => {
    dispatch(fetchCountry(name as string));
  }, []);

  return (
    <div className="countryInfoPage">
      <button className="back" onClick={() => { navigate(-1) }}>
        {<IoArrowBack />}
        Back
      </button>
      <>
        {loadingState === 'loading' && <h2>Loading...</h2>}
        {loadingError && <h2>{loadingError}</h2>}
        {country && <CountryInfo {...country} />}
      </>
    </div>
  );
};

export default CountryInfoPage;
