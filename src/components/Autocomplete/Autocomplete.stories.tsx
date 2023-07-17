import React from 'react';
import { StoryFn } from '@storybook/react';
import { Autocomplete } from './AutoComplete';
import { ArrowDropDown } from '@mui/icons-material';

export default {
  title: 'MUI/Components/Autocomplete',
  component: Autocomplete,
};

const Template: StoryFn<typeof Autocomplete> = (args) => <Autocomplete {...args}></Autocomplete>;

const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];

export const Base = Template.bind({});
Base.args = {
  label: 'Movie',
  options: options,
  sx: { width: 300 },
};
