import React from 'react';
import { StoryFn } from '@storybook/react';
import { FormControlLabel, FormControlLabelProps } from './FormControlLabel';
import { MuiCheckbox } from '../Checkbox';
import { Box } from '@mui/material';

export default {
  title: 'MUI/FormControlLabel',
  component: FormControlLabel,
};

const Template: StoryFn<FormControlLabelProps> = (args) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Box sx={{ width: '300px' }}>
      <FormControlLabel
        {...args}
        control={
          <MuiCheckbox
            checked={checked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked)}
            name="form"
          />
        }
      />
    </Box>
  );
};

export const Base = Template.bind({});
Base.args = {
  label: 'This product needs to be ISPM5',
};

export const Required = Template.bind({});
Required.args = {
  label: 'This product needs to be ISPM5',
  required: true,
};

export const LabelStart = Template.bind({});
LabelStart.args = {
  label: 'This product needs to be ISPM5',
  labelPlacement: 'start',
};

export const LabelTop = Template.bind({});
LabelTop.args = {
  label: 'This product needs to be ISPM5',
  labelPlacement: 'top',
};

export const LabelBottom = Template.bind({});
LabelBottom.args = {
  label: 'This product needs to be ISPM5',
  labelPlacement: 'bottom',
};
