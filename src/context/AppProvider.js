import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
      const { results } = await response.json();
      setPlanets(results);
      setFilteredData(results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filteredPlanets = planets
      .filter((planet) => planet.name
        .toLowerCase()
        .includes(filterName));
    setFilteredData(filteredPlanets);
  }, [filterName]);

  const handleChange = ({ target }) => {
    setFilterName(target.value.toLowerCase());
  };

  return (
    <AppContext.Provider
      value={ {
        planets,
        handleChange,
        filteredData,
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
