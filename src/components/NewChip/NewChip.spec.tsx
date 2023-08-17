import React from 'react';
import { render, screen } from '@testing-library/react';
import { NewChip } from './NewChip';

describe('Chip', () => {
  it('should render the component properly', () => {
    render(<NewChip label={'text'} addonStart={'prefix'} />);

    expect(screen.getByText('text')).toBeVisible();
    expect(screen.getByText('prefix')).toBeVisible();
  });
});
