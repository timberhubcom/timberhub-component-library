import React from 'react';
import { ComponentStory } from '@storybook/react';
import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args}>25+</Badge>;

export const Green = Template.bind({});
Green.args = {};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
};
export const Orange = Template.bind({});
Orange.args = {
  color: 'orange',
};
export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
};

export const WithAvatar = () => (
  <>
    <div className="">
      <Badge color="red" content={5} size="sm">
        <img src="https://i.pravatar.cc/300?u=a042581f4e29026707d" alt="" width={50} height={50} />
      </Badge>
    </div>
    <br />
    <div className="">
      <Badge color="red" content={5} placement="bottom-right" size="sm">
        <img src="https://i.pravatar.cc/300?u=a042581f4e29026707e" alt="" width={50} height={50} />
      </Badge>
    </div>
  </>
);
