import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { ContactCard } from './ContactCard';

export default {
  title: 'MUI/ContactCard',
  component: ContactCard,
} as Meta;

const Template: StoryFn<typeof ContactCard> = (args) => <ContactCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  title: 'Contact us to discuss this quote',
  details: {
    fullName: 'Joe Doe',
    location: 'Berlin, Germany',
    mail: 'joe@doe.com',
    src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  },
};
