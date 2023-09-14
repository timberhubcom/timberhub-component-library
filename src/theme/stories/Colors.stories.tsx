import { css } from '@emotion/css';
import { Meta } from '@storybook/react';
import React from 'react';
import { Button, Typography } from 'src/components';
import { tokens } from 'src/theme/tokens';

import { copyTextToClipboard } from '../../utils';

export default {
  title: 'Design System/Colors',
} as Meta;

const Color = ({ color = '', name = '' }: { color: string; name: string }) => {
  const parsedName = React.useMemo(() => {
    const isObject = name.includes('.');
    if (isObject) {
      const path = name.split('.');
      return `${path[0]}[${path[1]}]`;
    }
    return name;
  }, [name]);

  return (
    <div className={styles.root}>
      <div style={{ backgroundColor: color }} />
      <div className={styles.description}>
        <Typography variant={'headline_ss_xs'}>{parsedName}</Typography>
        <Typography variant={'body_m'}>{color}</Typography>
      </div>
      <div className={styles.actions}>
        <Button color={'grey'} size={'xs'} onClick={async () => await copyTextToClipboard(color)}>
          Copy HEX
        </Button>
        <Button
          color={'grey'}
          size={'xs'}
          onClick={async () => await copyTextToClipboard(`tokens.colors.${parsedName}`)}>
          Copy token
        </Button>
      </div>
    </div>
  );
};

export const Colors = ({ colors = tokens.colors, path = '' }: { colors: any; path: string }) => (
  <React.Fragment>
    {Object.entries(colors).map(([key, value]) => {
      if (typeof value === 'object') {
        return <Colors key={key} path={key + '.'} colors={value} />;
      }
      if (typeof value === 'string') {
        return <Color key={key} name={path + key} color={value} />;
      }
      return null;
    })}
  </React.Fragment>
);

const styles = {
  root: css`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 16px;
  `,
  description: css`
    padding: 16px 0;
  `,
  actions: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  `,
};
