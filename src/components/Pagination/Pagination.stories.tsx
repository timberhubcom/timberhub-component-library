import Pagination  from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Default = {
  args: {
    //
    path: 'string',
    queryPath: 'string',
    activePage: 1,
    totalPages: 4,
  },
};
