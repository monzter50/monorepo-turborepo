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

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  label: 'Badges'
}

export const Dark = Template.bind({})
Dark.args = {
  typeBadges: 'dark',
  label: 'Badges'
}

export const Poison = Template.bind({})
Poison.args = {
  typeBadges: 'poison',
  size: 'large',
  label: 'Badges'
}

export const Electric = Template.bind({})
Electric.args = {
  typeBadges: 'electric',
  size: 'small',
  label: 'Badges'
}

export const Ground = Template.bind({})
Ground.args = {
  typeBadges: 'ground',
  size: 'small',
  label: 'Badges'
}
