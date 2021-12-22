import React from 'react'

import { Badges } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Badges',
  component: Badges,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Badges {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Badges'
}

export const Secondary = Template.bind({})
Secondary.args = {
  typeBadges: 'dark',
  label: 'Badges'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Badges'
}

export const Small = Template.bind({})
Small.args = {
  typeBadges: 'electric',
  size: 'small',
  label: 'Badges'
}

export const Link = Template.bind({})
Link.args = {
  typeBadges: 'poison',
  size: 'small',
  label: 'Badges'
}
