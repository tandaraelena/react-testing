import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from '../counter/Counter';
import countReducer from '../counter/reducer'
afterEach(cleanup);

const renderWithRedux = (
  component, 
  { initialState, store = createStore(countReducer, initialState) } = {} 
  ) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

// query function will return the element or null if cannot find it
// get func ... or throw en error ...
it('renders with redux', () => {
  const { getByTestId } = renderWithRedux(<Counter/>);
  expect(getByTestId('count')).toHaveTextContent('0')
})

