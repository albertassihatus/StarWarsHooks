import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterOperator() {
  const { handleNumericFilter,
    onChangeCollumFilter,
    onChangeOperatorFilter,
    onChangeValueFilter,
    numericFiltered,
    numberValue,
    deleteFilter,
  } = useContext(AppContext);

  return (
    <div>
      <div>
        <div>
          Coluna
        </div>
        <select
          data-testid="column-filter"
          onChange={ onChangeCollumFilter }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>

        </select>
      </div>
      <div>
        <div>
          Operador
        </div>
        <select
          data-testid="comparison-filter"
          onChange={ onChangeOperatorFilter }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ onChangeValueFilter }
          value={ numberValue }
        />
      </div>
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleNumericFilter }
        >
          FILTRAR

        </button>
      </div>
      <div>
        {numericFiltered.map((filter, index) => (
          <p
            key={ `${filter.columFilter}-${index}` }

          >
            {`${filter.columFilter}`}
            {' '}
            {`${filter.operatorFilter}`}
            {' '}
            {`${filter.numberValue}`}
            <button
              type="button"
              onClick={ () => deleteFilter(index) }
            >
              APAGAR

            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default FilterOperator;
