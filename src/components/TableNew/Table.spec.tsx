import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Table } from './Table';
import { columns, data } from './data';

describe('Table', () => {
  it('should render columns and rows properly', () => {
    render(<Table columns={columns} data={data} />);

    expect(screen.getAllByText('pending').length).toBe(1);
    expect(screen.getAllByText('failed').length).toBe(5);
    expect(screen.getAllByText('success').length).toBe(4);

    expect(screen.getByText('user0@email0.com')).toBeVisible();
  });
  it('should call the onClick callback when a row is clicked', () => {
    const mockOnClick = jest.fn();
    render(<Table columns={columns} data={data} onClick={mockOnClick} />);

    fireEvent.click(screen.getByTestId('row-0'));

    expect(mockOnClick).toHaveBeenCalled();
  });
});
