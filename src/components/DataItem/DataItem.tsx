import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { css } from '@emotion/css';
import { tokens } from '../../theme/tokens';

import { Typography } from '../Typography';

export type DataItemsProps = {
  icon: string;
  title: string;
  description?: string;
  className?: string;
};

export const DataItem = React.forwardRef<HTMLDivElement, DataItemsProps>(function DataItem(
  { icon, title, description, className, ...props },
  ref,
) {
  const IconElement = icon;
  return (
    <Paper
      variant="outlined"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
      }}
      className={className}
      ref={ref}
    >
      <div className={styles.iconWrapper(tokens.colors.shade)}>
        <IconElement />
      </div>
      <Box sx={{ flex: '1 0 auto', p: 2, pb: 2.25 }}>
        <Typography variant="headline_ss_xs">{title}</Typography>
        <Typography variant="body_s">{description}</Typography>
      </Box>
    </Paper>
  );
});

const styles = {
  iconWrapper: (bgColor: string) => css`
    background-color: ${bgColor};
    width: 72px;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default DataItem;
