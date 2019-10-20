import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

// after each test afterEach(cleanup) will clean things up
afterEach(cleanup);

// will create a snapshot of Header component and if we refactor
// the code and change the elements of this comp, this test will fail
it('renders', () => {
  const { asFragment } = render(<Header content="Hello" />);
  expect(asFragment()).toMatchSnapshot();
});

it('inserts content in h3', () => {
  const { getByTestId, getByText } = render(<Header content="Hello" />);
  
  expect(getByTestId('h3id')).toHaveTextContent("Hello");
  expect(getByText('Hello')).toHaveClass("fancy-h3");
})