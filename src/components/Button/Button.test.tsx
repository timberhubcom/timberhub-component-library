import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render the Button component', () => {
    render(<Button>Add product</Button>);

    expect(screen.getByText('Add product')).toBeVisible();
  });
  it('should trigger the onClick function component', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Add product</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
