import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Fetch from './Fetch'
import axiosMock from 'axios'

afterEach(cleanup)

it('fetches and displays data', async () => {
  const url = '/greeting';
  const { getByTestId } = render(<Fetch url={url} />);

  expect(getByTestId('loading')).toHaveTextContent('Loading data...')
});