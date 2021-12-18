import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Button } from '../Button'

test('render components', () => {
  const button = {
    content: 'This is a test',
    important: true
  }

  const component = render(<Button button={button}/>)
  console.log(component)
})
