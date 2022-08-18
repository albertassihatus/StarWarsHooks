import React from 'react';
import FilterInput from './components/FilterInput';
import FilterOperator from './components/FilterOperator';
import Table from './components/Table';

function App() {
  return (
    <div>
      <FilterInput />
      <FilterOperator />
      <Table />
    </div>
  );
}

export default App;
