import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterOperator() {
  const { handleNumericFilter,
    setColumFilter,
    onChangeOperatorFilter,
    onChangeValueFilter,
    numericFiltered,
    numberValue,
    deleteFilter,
    newArrOptions,
    removeAll,
  } = useContext(AppContext);

  const operatorOptions = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <div>
        <label htmlFor="filter">
          Coluna
          <select
            data-testid="column-filter"
            onChange={ ({ target }) => setColumFilter(target.value) }
          >
            {
              newArrOptions.map((item) => (
                <option key={ item } value={ item }>
                  {item}
                </option>
              ))
            }
          </select>
        </label>
      </div>
      <div>
        <div>
          Operador
        </div>
        <select
          data-testid="comparison-filter"
          onChange={ onChangeOperatorFilter }
        >
          {
            operatorOptions.map((item) => (
              <option key={ item }>{item}</option>
            ))
          }
          ;
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
          <div
            key={ `${filter.columFilter}-${index}` }
            data-testid="filter"
          >
            <p>
              {`${filter.columFilter}`}
              {' '}
              {`${filter.operatorFilter}`}
              {' '}
              {`${filter.numberValue}`}
              <button
                type="button"
                onClick={ () => deleteFilter(index) }
              >
                X

              </button>
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => removeAll() }
      >
        Remover todas filtragens

      </button>

    </div>
  );
}

export default FilterOperator;
