import { ComponentStory } from '@storybook/react'
import React from 'react'

import { rows, structure } from './data'
import { Table } from './Table'

export default {
  title: 'Components/Table',
  component: Table,
}

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Base = Template.bind({})
Base.args = {
  structure,
  rows,
}

export const Empty = Template.bind({})
Empty.args = {
  structure,
  rows: [],
}

export const Loading = Template.bind({})
Loading.args = {
  structure,
  loading: true,
  rows,
}

export const HiddenHeader = Template.bind({})
HiddenHeader.args = {
  structure,
  rows,
  mobileHeader: 'hidden',
}

export const ClickableRow = Template.bind({})
ClickableRow.args = {
  structure,
  rows,
  clickableRow: true,
  // eslint-disable-next-line no-console
  onClick: (row) => console.log(row),
}

export const WithPagination = Template.bind({})
WithPagination.args = {
  structure,
  rows,
  clickableRow: true,
  // eslint-disable-next-line no-console
  onClick: (row) => console.log(row),
  pagination: true,
  paginationData: {
    activePage: 1,
    totalPages: 10,
    // eslint-disable-next-line no-console
    onPageChange: (page) => console.log(page),
  },
}
