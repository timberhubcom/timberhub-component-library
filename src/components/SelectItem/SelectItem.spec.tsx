import React from 'react';
import SelectItem from './SelectItem';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

const options = [
  { value: 'option 1', label: 'option 1' },
  { value: 'option 2', label: 'option 2' },
];

describe('SelectItem', () => {
  it('should render the component correctly', async () => {
    render(<SelectItem name={'select'} options={options} label={'label'} />);

    expect(screen.getByText('label')).toBeVisible();
    expect(screen.getByText('select an option')).toBeVisible();

    fireEvent.mouseDown(screen.getByRole('combobox'));

    await waitFor(() => expect(screen.getByText(options[0].label)).toBeVisible());
    expect(screen.getByText(options[1].label)).toBeVisible();
  });
  it('should be able to select an option', async () => {
    render(<SelectItem name={'select'} options={options} label={'label'} />);

    fireEvent.mouseDown(screen.getByRole('combobox'));

    await waitFor(() => expect(screen.getByText(options[0].label)).toBeVisible());

    fireEvent.click(screen.getByText(options[0].label));

    await waitFor(() => expect(screen.getByText(options[0].label)).toBeVisible());
  });
});
