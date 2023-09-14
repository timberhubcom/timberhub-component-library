import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { rows, structure } from './data';
import { Table } from './Table';

describe('Table Deprecated', () => {
  it('should render columns and rows properly', () => {
    render(<Table rows={rows} structure={structure} />);

    // rows
    expect(screen.getAllByText('data 1').length).toBe(5);
    expect(screen.getAllByText('data 2').length).toBe(2);
    expect(screen.getAllByText('data 3').length).toBe(3);
    expect(screen.getAllByText('data 4').length).toBe(2);

    // renders child components
    expect(screen.getByText('React node')).toBeVisible();
  });
  it('should call the onClick callback when a row is clicked', () => {
    const mockOnClick = jest.fn();
    render(<Table rows={rows} structure={structure} onClick={mockOnClick} />);

    fireEvent.click(screen.getByTestId('row-0'));

    expect(mockOnClick).toHaveBeenCalledWith(rows[0]);
  });
});
