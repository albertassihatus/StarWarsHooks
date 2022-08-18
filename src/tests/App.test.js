import { render, screen } from '@testing-library/react';
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


  it('Test if have a input to search and a filter', async () => {
    render(<AppProvider><App /></AppProvider>);

    const inputSearch = screen.getByRole("textbox");
    expect(inputSearch).toBeDefined();

    const coluna = screen.getByText("Coluna");
    expect(coluna).toBeDefined();

    const colunaSelector = screen.getAllByRole("combobox")[0];;
    expect(colunaSelector).toBeDefined();

    const operador = screen.getByText("Operador");
    expect(operador).toBeDefined();

    const operadorSelector = screen.getAllByRole("combobox")[1];
    expect(operadorSelector).toBeDefined();

    const valueNumber = screen.getByRole("spinbutton");
    expect(valueNumber).toBeDefined();

    const filterBtn = screen.getByRole("button", { name: /filtrar/i });
    expect(filterBtn).toBeDefined();

    const table = screen.getByRole("table");
    expect(table).toBeDefined();  


    expect(fetch).toBeCalled();
      
    })
});
