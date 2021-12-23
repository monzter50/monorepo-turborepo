import React from 'react'

import { Skeleton } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Skeleton',
  component: Skeleton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Skeleton {...args} />

export const Card = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Card.args = {
  typeSkeleton: 'card'
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   typeButton: 'secondary',
//   label: 'Button'
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button'
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button'
// }

// export const Link = Template.bind({})
// Link.args = {
//   typeButton: 'link',
//   size: 'small',
//   label: 'Button'
// }
