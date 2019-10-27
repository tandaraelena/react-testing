import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Fetch from './Fetch'
import axiosMock from 'axios'

afterEach(cleanup)

it('fetches and displays data', async () => {
  axiosMock.get.mockResolvedValueOnce({ data: { greeting: 'hello and bye' }})

  const url = '/greeting';
  const { getByTestId } = render(<Fetch url={url} />);

  expect(getByTestId('loading')).toHaveTextContent('Loading data...');

  const resolvedSpan = await waitForElement(() => getByTestId('resolved'));

  expect(resolvedSpan).toHaveTextContent('hello and bye');
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url)
});