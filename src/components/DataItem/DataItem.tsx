import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { cx, css } from '@emotion/css';
import { tokens } from '../../theme/tokens';

import { Typography } from '../Typography';
import styled from '@emotion/styled';

export type DataItemsProps = {
  icon: string;
  title: string;
  description?: string;
  className?: string;
};

const DataItemWrapper = styled(Paper)`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const DataItem = React.forwardRef<HTMLDivElement, DataItemsProps>(function DataItem(
  { icon, title, description, className, ...props },
  ref,
) {
  return (
    <DataItemWrapper variant="outlined" className={cx(className)} ref={ref}>
      <Box display="flex">
        <img src={icon} alt="" className={styles.icon(tokens.colors.shade)} />
      </Box>
      <Box sx={{ flex: '1 0 auto', p: 2, pb: 2.25 }}>
        <Typography variant="headline_ss_xxs">{title}</Typography>
        <Typography variant="body_s">{description}</Typography>
      </Box>
    </DataItemWrapper>
  );
});

const styles = {
  icon: (bgColor: string) => css`
    background-color: ${bgColor};
    width: 74px;
    min-height: 79px;
  `,
};

export default DataItem;
