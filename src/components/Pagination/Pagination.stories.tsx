import React from 'react'

import Pagination, { PaginationProps } from './Pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
}

const PaginationWithState = (args: PaginationProps) => {
  const [activePage, setActivePage] = React.useState(args.activePage)
  return <Pagination {...args} activePage={activePage} onPageChange={(num: number = 1) => setActivePage(num)} />
}

export const Default = {
  args: {
    activePage: 1,
    totalPages: 4,
  },
  render: (args: PaginationProps) => <PaginationWithState {...args} />,
}

export const WithEllipse = {
  args: {
    activePage: 1,
    totalPages: 40,
  },
  render: (args: PaginationProps) => <PaginationWithState {...args} />,
}

export const WithEllipseFourVisible = {
  args: {
    activePage: 1,
    totalPages: 40,
    visiblePages: 4,
  },
  render: (args: PaginationProps) => <PaginationWithState {...args} />,
}

export const WithEllipseTenVisible = {
  args: {
    activePage: 1,
    totalPages: 40,
    visiblePages: 10,
  },
  render: (args: PaginationProps) => <PaginationWithState {...args} />,
}
