import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchAPI from '../services/data';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const newPlanets = await fetchAPI();
    setPlanets(newPlanets);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <AppContext.Provider
      value={ {
        planets,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
