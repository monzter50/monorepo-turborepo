import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Skeleton } from './index'

test('render components', () => {
  const { container } = render(<Skeleton typeSkeleton="card"/>)
  const el = container.querySelector('div')

  expect(el).toBeDefined()
})
