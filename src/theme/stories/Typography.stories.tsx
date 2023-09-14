import { css } from '@emotion/css';
import { Divider } from '@mui/material';
import { Meta } from '@storybook/react';
import React from 'react';
import { Button, Typography } from 'src/components';
import { tokens } from 'src/theme/tokens';

import { CustomTypographyVariants } from '../../types';
import { copyTextToClipboard } from '../../utils';

export default {
  title: 'Design System/Typography',
} as Meta;

export const TypographyVariants = () => (
  <div className={styles.root}>
    {Object.entries(tokens.typography).map(([key, value]) => (
      <React.Fragment key={key}>
        <div className={styles.container}>
          <Typography variant={key as CustomTypographyVariants}>The Quick Brown Fox</Typography>
          <div>
            <Typography variant={'headline_ss_xs'}>{key}</Typography>
            <Typography variant={'body_m'}>{`font-family: ${value.fontFamily}`}</Typography>
            <Typography variant={'body_m'}>{`font-size: ${value.fontSize}`}</Typography>
            <Typography variant={'body_m'}>{`font-weight: ${value.fontWeight}`}</Typography>
            <Typography variant={'body_m'}>{`line-height: ${value.lineHeight}`}</Typography>
          </div>
          <Button
            color={'grey'}
            size={'xs'}
            onClick={async () => {
              await copyTextToClipboard(`tokens.typography.${key}`);
            }}>
            Copy token
          </Button>
        </div>
        <Divider />
      </React.Fragment>
    ))}
  </div>
);

const styles = {
  root: css`
    display: grid;
    gap: 32px;
  `,
  container: css`
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr;
    gap: 16px;
  `,
  actions: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  `,
};
