import React from 'react';
import { TextField } from '../index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('TextField', () => {
  it('should render the input properly', () => {
    render(<TextField label={'label'} defaultValue={'test value'} description={'description'} />);

    expect(screen.getByText('label')).toBeVisible();
    expect(screen.getByText('description')).toBeVisible();
    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox')).toHaveValue('test value');
  });
  it('should trigger the on change function when input value is changed', () => {
    const onChangeMock = jest.fn();

    render(<TextField label={'test'} defaultValue={'test value'} onChange={onChangeMock} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test change' } });
    expect(onChangeMock).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toHaveValue('test change');
  });
});
