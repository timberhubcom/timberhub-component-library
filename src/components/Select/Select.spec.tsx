import React from 'react';
import { Select } from '../index';
import { fireEvent, render, screen, within } from '@testing-library/react';

describe('Select', () => {
  it('should trigger the on change function when input value is changed', () => {
    const onChangeMock = jest.fn();
    render(
      <Select
        label={'test'}
        onChange={onChangeMock}
        defaultValue={'myAccount'}
        options={[
          { label: 'My Account', value: 'myAccount' },
          { label: 'Log Out', value: 'logOut' },
        ]}
      />,
    );

    fireEvent.mouseDown(screen.getByRole('button'));

    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/log out/i));

    expect(screen.getByRole('button')).toHaveTextContent(/log out/i);
    expect(onChangeMock).toHaveBeenCalled();
  });
});
