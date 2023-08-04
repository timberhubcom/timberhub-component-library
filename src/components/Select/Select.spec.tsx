import React from 'react';
import { Select } from '../index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('TextField', () => {
  it('should render the input properly', () => {
    render(<Select label={'label'} defaultValue={'test value'} />);

    expect(screen.getByText('label')).toBeVisible();
    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox')).toHaveValue('test value');
  });
  it('should trigger the on change function when input value is changed', () => {
    const onChangeMock = jest.fn();

    render(<Select label={'test'} defaultValue={'test value'} onChange={onChangeMock} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test change' } });
    expect(onChangeMock).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toHaveValue('test change');
    //  UserEvent.click(screen.getByRole(screen.getByTestId('country'), 'button'));
    //  await waitFor(() => UserEvent.click(screen.getByText(/brazil/i)));
    //  expect(screen.getByRole('heading')).toHaveTextContent(/brazil/i);
  });
});
