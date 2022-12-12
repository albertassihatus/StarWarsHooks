import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  // estados e filtros do input
  const [planets, setPlanets] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterName, setFilterName] = useState('');
  //

  // estados e filtros dos filtros
  const [numericFiltered, setNumericFiltered] = useState([]);

  // filterSelectsCollum
  const [updateColumFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const [newArrOptions, setNewArrOptions] = useState([]);
  // inputs:
  const [columFilter, setColumFilter] = useState(updateColumFilter[0]);

  const [operatorFilter, setOperatorFilter] = useState('maior que');
  const [numberValue, setNumberValue] = useState(0);

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

    const filteredSearch = numericFiltered
      .reduce((acumulator, filter) => acumulator.filter((planet) => {
        switch (filter.operatorFilter) {
        case 'maior que':
          return planet[filter.columFilter] > Number(filter.numberValue);

        case 'menor que':
          return planet[filter.columFilter] < Number(filter.numberValue);

        case 'igual a':
          return planet[filter.columFilter] === filter.numberValue;

        default:
          return true;
        }
      }), filteredPlanets);

    setFilteredData(filteredSearch);
  }, [filterName, numericFiltered]);

  const handleNameChange = ({ target }) => {
    setFilterName(target.value.toLowerCase());
  };

  const onChangeOperatorFilter = ({ target }) => {
    setOperatorFilter(target.value);
  };

  const onChangeValueFilter = ({ target }) => {
    setNumberValue(target.value);
  };

  const handleNumericFilter = () => {
    const newNumericFilter = {
      columFilter,
      operatorFilter,
      numberValue,
    };
    setNumericFiltered([...numericFiltered, newNumericFilter]);
  };

  useEffect(() => {
    setNewArrOptions(updateColumFilter.filter(
      (element) => !numericFiltered.find((item) => item.columFilter === element),
    ));
  }, [numericFiltered]);

  useEffect(() => {
    setColumFilter(newArrOptions[0]);
  }, [newArrOptions]);

  const deleteFilter = (index) => {
    setNumericFiltered(
      numericFiltered.filter((item, itemIndex) => itemIndex !== index),
    );
  };

  const removeAll = () => {
    setNumericFiltered([]);
    setPlanets(planets);
  };

  return (
    <AppContext.Provider
      value={ {
        planets,
        handleNameChange,
        filteredData,
        handleNumericFilter,
        onChangeOperatorFilter,
        onChangeValueFilter,
        numericFiltered,
        setNumericFiltered,
        deleteFilter,
        numberValue,
        columFilter,
        setColumFilter,
        newArrOptions,
        removeAll,
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
