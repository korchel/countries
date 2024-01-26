import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchData } from '../store/loadingSlice';
import type { AppDispatchType } from '../store';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatchType>();

  useEffect(() => {
    dispatch(fetchData())
  }, []);

  return (
    <div className="container">
      <p>
        !!!!
      </p>
    </div>
  );
};

export default HomePage;
