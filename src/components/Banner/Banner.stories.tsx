import { StoryFn } from '@storybook/react';
import React from 'react';

import Banner, { BannerProps } from './Banner';

export default {
  title: 'MUI/Banner',
  component: Banner,
};

const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />;

export const ErrorS = Template.bind({});
ErrorS.args = {
  variant: 'error',
  iconSize: 's',
  title: 'Title for s error banner text here',
  description: 'Description of this s error banner',
};
export const ErrorXS = Template.bind({});
ErrorXS.args = {
  variant: 'error',
  iconSize: 'xs',
  title: 'Title for xs error banner text here',
  description: 'Description of this xs error banner',
};
export const InfoS = Template.bind({});
InfoS.args = {
  variant: 'info',
  iconSize: 's',
  title: 'Title for s info banner text here',
  description: 'Description of this s info banner',
};
export const InfoXS = Template.bind({});
InfoXS.args = {
  variant: 'info',
  iconSize: 'xs',
  title: 'Title for xs info banner text here',
  description: 'Description of this xs info banner',
};
export const NeutralS = Template.bind({});
NeutralS.args = {
  variant: 'neutral',
  iconSize: 's',
  title: 'Title for s neutral banner text here',
  description: 'Description of this s neutral banner',
};
export const NeutralXS = Template.bind({});
NeutralXS.args = {
  variant: 'neutral',
  iconSize: 'xs',
  title: 'Title for xs neutral banner text here',
  description: 'Description of this xs neutral banner',
};
export const SuccessS = Template.bind({});
SuccessS.args = {
  variant: 'success',
  iconSize: 's',
  title: 'Title for s success banner text here',
  description: 'Description of this s success banner',
};
export const SuccessXS = Template.bind({});
SuccessXS.args = {
  variant: 'success',
  iconSize: 'xs',
  title: 'Title for xs success banner text here',
  description: 'Description of this xs success banner',
};
export const WarningS = Template.bind({});
WarningS.args = {
  variant: 'warning',
  iconSize: 's',
  title: 'Title for s warning banner text here',
  description: 'Description of this s warning banner',
};
export const WarningXS = Template.bind({});
WarningXS.args = {
  variant: 'warning',
  iconSize: 'xs',
  title: 'Title for xs warning banner text here',
  description: 'Description of this xs warning banner',
};
