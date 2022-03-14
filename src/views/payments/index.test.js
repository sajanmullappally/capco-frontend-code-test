import React  from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Payments from ".";
import { Provider } from "react-redux";
import { store } from '../../store'

test('renders without crashing', async() => {
  render(<Provider store={store}><Payments /></Provider>)

  expect(screen.getByText('Transactions')).toBeVisible()
  
  fireEvent.click(screen.getByRole('button', { name: /Load More/i }))
  expect(await screen.findByText(/99/i)).toBeInTheDocument()

  fireEvent.change(screen.getByRole('select'), { target: { value: 'P' }})

  const table = screen.getByRole('table').innerHTML
  expect(table).not.toContain("Approved")

})