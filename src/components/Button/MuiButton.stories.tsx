import { Stack } from '@mui/material';
import { StoryFn } from '@storybook/react';
import React from 'react';
import Button from './MuiButton';

export default {
  title: 'MUI/Components/Button',
  component: Button,
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>Add product</Button>;

const icon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.77495 1.7998C9.14774 1.7998 9.44995 2.10201 9.44995 2.4748L9.44995 15.5248C9.44995 15.8976 9.14774 16.1998 8.77495 16.1998C8.40216 16.1998 8.09995 15.8976 8.09995 15.5248L8.09995 2.4748C8.09995 2.10201 8.40216 1.7998 8.77495 1.7998Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.2 8.7752C16.2 9.14799 15.8977 9.4502 15.525 9.4502L2.47495 9.4502C2.10216 9.4502 1.79995 9.14799 1.79995 8.7752C1.79995 8.4024 2.10216 8.10019 2.47495 8.10019L15.525 8.10019C15.8977 8.10019 16.2 8.4024 16.2 8.7752Z"
      fill="black"
    />
  </svg>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Plain = Template.bind({});
Plain.args = {
  variant: 'text',
};

export const Negative = Template.bind({});
Negative.args = {
  color: 'error',
};

const MultipleSizes: StoryFn<typeof Button> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center">
    <div className="">
      <Button size="xl">Button text</Button>
    </div>
    <div className="">
      <Button size="lg">Button text</Button>
    </div>
    <div className="">
      <Button size="md">Button text</Button>
    </div>
    <div className="">
      <Button size="sm">Button text</Button>
    </div>
    <div className="">
      <Button size="xs">Button text</Button>
    </div>
  </Stack>
);
export const Sizes = MultipleSizes.bind({});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  icon,
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'text',
  icon,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
