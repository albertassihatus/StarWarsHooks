import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterInput() {
  const { handleNameChange } = useContext(AppContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ handleNameChange }
    />
  );
}

export default FilterInput;
