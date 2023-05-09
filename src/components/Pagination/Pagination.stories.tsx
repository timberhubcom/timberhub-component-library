import React  from 'react';
import Pagination  from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const PaginationWithState = (args) => {
  const [activePage, setActivePage] = React.useState(args.activePage);
  return <Pagination {...args} activePage={activePage} onPageChange={setActivePage} />;
};

export const Default = {
  args: {
    //
    // activePage: 1,
    totalPages: 4,
  },
  render: (args) => <PaginationWithState {...args} />,
};
