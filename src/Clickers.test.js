import React from 'react'
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Clickers from './Clickers'

afterEach(cleanup);

it('renders the count', () => {
  const { getByTestId } = render(<Clickers />)
  expect(getByTestId('clickersId')).toHaveTextContent('0')
})
it('increasement count', () => {
  const { getByText, getByTestId } = render(<Clickers/>)

  fireEvent.click(getByText(/up/i))
  expect(getByTestId('clickersId')).toHaveTextContent('1')
})
it('decrement count', async () => {
  const { getByText, getByTestId } = render(<Clickers/>)
  fireEvent.click(getByText(/down/i))

  const countSpan = await waitForElement(() => getByText('-1'))
  expect(countSpan).toHaveTextContent('1')
})
