import React from 'react';
import { StoryFn } from '@storybook/react';
import { Box, MenuItem } from '@mui/material';
import { ExtendedSelectProps, Select } from './Select';

export default {
  title: 'MUI/Select',
  component: Select,
};

const Template: StoryFn<ExtendedSelectProps<string>> = (args) => {
  return (
    <Box>
      <Select<string> fullWidth {...args} />
    </Box>
  );
};

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options,
};

export const WithEmptyOption = Template.bind({});
WithEmptyOption.args = {
  label: 'Select an option',
  emptyOptionText: 'None',
  options,
};

export const Required = Template.bind({});
Required.args = {
  label: 'Select an option',
  required: true,
  options,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: 'Select an option',
  options,
  sx: {
    backgroundColor: 'lightgray',
  },
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  label: 'Select an option',
  children: (
    <>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </>
  ),
};
