import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Radio } from '../index';

describe('Radio', () => {
  it('should render the input properly', () => {
    render(<Radio option={{ name: 'option', value: 'option' }} />);

    expect(screen.getByText('option')).toBeVisible();
    expect(screen.getByRole('radio')).toBeVisible();
  });
  it('should trigger the on change function when switch value is changed', () => {
    const onChangeMock = jest.fn();

    render(<Radio onChange={onChangeMock} option={{ name: 'option', value: 'option' }} />);

    fireEvent.click(screen.getByRole('radio'));
    expect(onChangeMock).toHaveBeenCalled();
    expect(screen.getByRole('radio')).toBeTruthy();
  });
});
