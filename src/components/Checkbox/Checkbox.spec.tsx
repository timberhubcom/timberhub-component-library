import React from 'react';
import { Checkbox } from '../index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Checkbox', () => {
  it('should render the checkbox properly', () => {
    render(<Checkbox option={{ name: 'option', value: 'option' }} />);

    expect(screen.getByText('option')).toBeVisible();
  });
  it('should trigger the on change function on click', () => {
    const mockOnChange = jest.fn();
    render(<Checkbox option={{ name: 'option', value: 'option' }} onChange={mockOnChange} />);

    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockOnChange).toHaveBeenCalled();
  });
  it('should render the children options when provided', () => {
    const mockOnChange = jest.fn();
    render(
      <Checkbox
        option={{ name: 'option', value: 'option', children: <div>Children option</div> }}
        onChange={mockOnChange}
      />,
    );

    expect(screen.getByText('Children option')).toBeVisible();
  });
});
