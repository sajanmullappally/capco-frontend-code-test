import React from 'react'
import { fireEvent, getByRole, getByText, queryByRole, queryByText, render, screen, within } from '@testing-library/react'
import TransactionsHeader from '.'

test('renders without crashing', () => {
  render(<TransactionsHeader />)
})