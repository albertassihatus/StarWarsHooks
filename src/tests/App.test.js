import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import testData from '../../cypress/mocks/testData';
import App from '../App';
import AppProvider from '../context/AppProvider';

describe('Testing the APP', () => {

  beforeEach(() => {
    global.fetch = jest.fn(async () => ({
      json: async () => testData
    }));
  });

  afterEach(() => jest.clearAllMocks());


  const planets = testData.results;

  it('Test if have a input to search and a filter', async () => {
    render(<AppProvider><App /></AppProvider>);

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const inputSearch = screen.getByTestId('name-filter');
    userEvent.type(inputSearch, '');
    expect(inputSearch).toBeDefined();
    
    const coluna = screen.getByTestId("column-filter");
    expect(coluna).toBeDefined();

    const filterSelect = screen.getAllByRole("combobox")[0];;
    userEvent.selectOptions(filterSelect, ['population'])
    expect(filterSelect).toBeDefined();
    
    
    const operador = screen.getByText("Operador");
    expect(operador).toBeDefined();
    
    const operadorSelector = screen.getByTestId("comparison-filter");
    userEvent.selectOptions(operadorSelector, ['maior que'])
    expect(operadorSelector).toBeDefined();

    const valueNumber = screen.getByRole("spinbutton");
    userEvent.type(valueNumber, 5);
    expect(valueNumber).toBeDefined();

    const filterBtn = screen.getByRole("button", { name: /filtrar/i });
    expect(filterBtn).toBeDefined();

    const table = screen.getByRole("table");
    expect(table).toBeDefined();  

    userEvent.click(filterBtn)
  
    const columName = screen.getByRole("columnheader", { name: /name/i });

    expect(columName).toBeDefined();
    console.log(screen.logTestingPlaygroundURL());
     
     const inputName = screen.getByTestId("name-filter");
    userEvent.type(inputName, "");
    expect(screen.getAllByRole("row")).toHaveLength(8);
  });

  it('Test if have a input to search and a filter', async () => {
    render(<AppProvider><App /></AppProvider>);

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const inputSearch = screen.getByTestId('name-filter');
    userEvent.type(inputSearch, '');
    expect(inputSearch).toBeDefined();
    
    const coluna = screen.getByTestId("column-filter");
    expect(coluna).toBeDefined();

    const filterSelect = screen.getAllByRole("combobox")[0];;
    userEvent.selectOptions(filterSelect, ['diameter'])
    expect(filterSelect).toBeDefined();
    
    
    const operador = screen.getByText("Operador");
    expect(operador).toBeDefined();
    
    const operadorSelector = screen.getByTestId("comparison-filter");
    userEvent.selectOptions(operadorSelector, ['menor que'])
    expect(operadorSelector).toBeDefined();

    const valueNumber = screen.getByRole("spinbutton");
    userEvent.type(valueNumber, 7200);
    expect(valueNumber).toBeDefined();

    const filterBtn = screen.getByRole("button", { name: /filtrar/i });
    expect(filterBtn).toBeDefined();

    const table = screen.getByRole("table");
    expect(table).toBeDefined();  

    userEvent.click(filterBtn)
  
    const columName = screen.getByRole("columnheader", { name: /name/i });

    expect(columName).toBeDefined();

    const inputName = screen.getByTestId("name-filter");
    userEvent.type(inputName, "");
    expect(screen.getAllByRole("row")).toHaveLength(1);
  });

  it('Test if have a input to search and a filter', async () => {
    render(<AppProvider><App /></AppProvider>);

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const inputSearch = screen.getByTestId('name-filter');
    userEvent.type(inputSearch, '');
    expect(inputSearch).toBeDefined();
    
    const coluna = screen.getByTestId("column-filter");
    expect(coluna).toBeDefined();

    const filterSelect = screen.getAllByRole("combobox")[0];;
    userEvent.selectOptions(filterSelect, ['diameter'])
    expect(filterSelect).toBeDefined();
    
    
    const operador = screen.getByText("Operador");
    expect(operador).toBeDefined();
    
    const operadorSelector = screen.getByTestId("comparison-filter");
    userEvent.selectOptions(operadorSelector, ['igual a'])
    expect(operadorSelector).toBeDefined();

    const valueNumber = screen.getByRole("spinbutton");
    userEvent.type(valueNumber, 7200);
    expect(valueNumber).toBeDefined();

    const filterBtn = screen.getByRole("button", { name: /filtrar/i });
    expect(filterBtn).toBeDefined();

    const table = screen.getByRole("table");
    expect(table).toBeDefined();  

    userEvent.click(filterBtn)
  
    const columName = screen.getByRole("columnheader", { name: /name/i });

    expect(columName).toBeDefined();

    const inputName = screen.getByTestId("name-filter");
    userEvent.type(inputName, "");
    expect(screen.getAllByRole("row")).toHaveLength(1);
  });
});
