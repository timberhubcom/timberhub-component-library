import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Checkbox } from '../index'

describe('Checkbox', () => {
  it('should render the checkbox properly', () => {
    render(<Checkbox option={{ name: 'option', value: 'option' }} />)

    expect(screen.getByText('option')).toBeVisible()
  })
  it('should trigger the on change function on click', () => {
    const mockClick = jest.fn()
    render(<Checkbox option={{ name: 'option', value: 'option' }} onClick={mockClick} />)

    fireEvent.click(screen.getByRole('checkbox'))
    expect(mockClick).toHaveBeenCalled()
  })
  it('should render the children options when provided', () => {
    const mockClick = jest.fn()
    render(
      <Checkbox
        option={{ name: 'option', value: 'option', children: <div>Children option</div> }}
        onClick={mockClick}
      />
    )

    expect(screen.getByText('Children option')).toBeVisible()
  })
})
