import React from 'react';
import { StoryFn } from '@storybook/react';
import { Box } from '@mui/material';
import { ExtendedSelectProps, Select } from './Select';

export default {
  title: 'MUI/Components/Select',
  component: Select,
};

const Template: StoryFn<ExtendedSelectProps<string>> = (args) => {
  return (
    <Box>
      <Select<string> fullWidth defaultValue="" value={''} {...args} />
    </Box>
  );
};

export const Base = Template.bind({});
Base.args = {
  label: 'This product needs to be ISPM5',
  fullWidth: true,
  options: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ],
};
