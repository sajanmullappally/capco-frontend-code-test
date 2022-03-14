import React  from "react";
import { render, screen } from "@testing-library/react";
import LoadMore from ".";
import '@testing-library/jest-dom'

test('renders without crashing', () => {
  render(<LoadMore />)

  expect(screen.getByRole('button', { name: 'Load More' })).toBeEnabled()
})