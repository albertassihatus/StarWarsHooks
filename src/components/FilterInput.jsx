import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterInput() {
  const { handleChange } = useContext(AppContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ handleChange }
    />
  );
}

export default FilterInput;
