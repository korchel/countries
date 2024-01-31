import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { fetchCountry, getCountry, getloadingState, getLoadingError, clearCountry } from '../store/loadingCountrySlice';
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
    return () => {
      dispatch(clearCountry());
    };
  }, [dispatch, name]);

  return (
    <div className="container countryInfoPage">
      <div className="ptb-80">
        <button className="btn" onClick={() => { navigate(-1); }}>
          {<IoArrowBack />}
          Back
        </button>
      </div>
      <>
        {loadingState === 'loading' && <h2>Loading...</h2>}
        {loadingError && <h2>{loadingError}</h2>}
        {country && <CountryInfo {...country} />}
      </>
    </div>
  );
};

export default CountryInfoPage;
