import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckboxGroup from './CheckboxGroup';

const options = [
  { name: 'option 1', value: 'option 1' },
  { name: 'option 2', value: 'option 2' },
  { name: 'option 3', value: 'option 3' },
];

describe('CheckboxGroup', () => {
  it('should render the checkbox properly', () => {
    render(<CheckboxGroup name={'checkboxes'} options={options} />);

    expect(screen.getByText('option 1')).toBeVisible();
    expect(screen.getByText('option 2')).toBeVisible();
    expect(screen.getByText('option 3')).toBeVisible();
  });
  it('should render the default options provided', () => {
    render(<CheckboxGroup name={'checkboxes'} options={options} defaultValues={{ 'option 1': 'option 1' }} />);

    expect(screen.getAllByRole('checkbox')[0]).toHaveAttribute('checked', '');
  });
});
