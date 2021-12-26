import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Card } from './index'

test('render components', () => {
  const { container } = render(<Card theme="dark"/>)
  const el = container.querySelector('div')

  expect(el).toBeDefined()
})
