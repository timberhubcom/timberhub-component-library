import React from 'react';
import { RadioGroup } from '../index';
import { fireEvent, render, screen } from '@testing-library/react';

const options = [
  { name: 'option 1', value: 'option 1' },
  { name: 'option 2', value: 'option 2' },
  { name: 'option 3', value: 'option 3' },
];

describe('RadioGroup', () => {
  it('should render the radio group properly', () => {
    render(<RadioGroup options={options} />);

    expect(screen.getByText(options[0].name)).toBeVisible();
    expect(screen.getByText(options[1].name)).toBeVisible();
    expect(screen.getByText(options[2].name)).toBeVisible();
  });
  it('should trigger the on change func on option click', () => {
    const mockOnChange = jest.fn();
    render(<RadioGroup options={options} onChange={mockOnChange} />);

    fireEvent.click(screen.getByText(options[0].name));
    expect(mockOnChange).toHaveBeenCalled();
  });
});
