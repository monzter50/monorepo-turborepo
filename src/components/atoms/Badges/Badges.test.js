import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Badges } from './index'

test('render components', () => {
  render(<Badges label="Badges"/>)
  const el = screen.getByText('Badges')

  expect(el).toBeDefined()
})
