import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './index'

test('render components', () => {
  render(<Button label="Button"/>)
  const el = screen.getByText('Button')

  expect(el).toBeDefined()
})

test('handle components events', () => {
  const mockHandler = jest.fn()
  render(<Button label="Button" typeButton="primary" onClick={mockHandler}/>)
  const el = screen.getByRole('button')
  expect(el.classList.contains('storybook-button--primary')).toBe(true)
  expect(el).toHaveClass('storybook-button--primary')

  fireEvent.click(el)
  expect(mockHandler).toHaveBeenCalledTimes(1)
})
