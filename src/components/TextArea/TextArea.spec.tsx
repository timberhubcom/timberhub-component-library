import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { TextArea } from '../index'

describe('TextArea', () => {
  it('should render the text area properly', () => {
    render(<TextArea label={'label'} defaultValue={'test value'} description={'description'} />)

    expect(screen.getByText('label')).toBeVisible()
    expect(screen.getByText('description')).toBeVisible()
    expect(screen.getByRole('textbox')).toBeVisible()
    expect(screen.getByRole('textbox')).toHaveValue('test value')
  })
  it('should trigger the on change function when the text area value is changed', () => {
    const onChangeMock = jest.fn()

    render(<TextArea label={'test'} defaultValue={'test value'} onChange={onChangeMock} />)

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test change' } })
    expect(onChangeMock).toHaveBeenCalled()
    expect(screen.getByRole('textbox')).toHaveValue('test change')
  })
})
