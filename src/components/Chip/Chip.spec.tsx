import { render, screen } from '@testing-library/react'
import React from 'react'

import Chip from './Chip'

describe('Chip', () => {
  it('should render the component properly', () => {
    render(<Chip text={'text'} prefix={'prefix'} />)

    expect(screen.getByText('text')).toBeVisible()
    expect(screen.getByText('prefix')).toBeVisible()
  })
})
