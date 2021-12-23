import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Loader } from './index'

test('render components', () => {
  const { container } = render(<Loader label="any"/>)
  const el = container.querySelector('div')

  expect(el).toBeDefined()
})
