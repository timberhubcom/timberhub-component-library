import React from 'react';
import { Switch } from '../index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Switch', () => {
  it('should render the input properly', () => {
    render(<Switch label={'label'} option={{ name: 'option' }} />);

    expect(screen.getByText('label')).toBeVisible();
    expect(screen.getByRole('checkbox')).toBeVisible();
  });
  it('should trigger the on change function when switch value is changed', () => {
    const onChangeMock = jest.fn();

    render(<Switch label={'test'} onChange={onChangeMock} option={{ name: 'option' }} />);

    fireEvent.click(screen.getByRole('checkbox'));
    expect(onChangeMock).toHaveBeenCalled();
    expect(screen.getByRole('checkbox')).toBeTruthy();
  });
});
