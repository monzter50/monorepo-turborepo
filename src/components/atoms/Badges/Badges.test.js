import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Badges } from './index'

test('render components', () => {
  render(<Badges label="Button"/>)
  const el = screen.getByText('Button')

  expect(el).toBeDefined()
})
