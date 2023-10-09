import { ContactCard } from './ContactCard';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Mui/ContactCard',
  component: ContactCard,
} as Meta;

const Template: StoryFn<typeof ContactCard> = (args) => <ContactCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  title: 'Contact us to discuss this quote',
  details: {
    fullName: 'Joe Doe',
    location: 'Berlin, Germany',
    telephone: '00339284822',
    mail: 'joe@doe.com',
    src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  },
};
