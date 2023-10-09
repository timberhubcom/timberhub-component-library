import React from 'react';
import { Meta } from '@storybook/react';
import { Box, Typography, styled } from 'src/components';
import { tokens } from 'src/theme/tokens';

const StyleColor = styled('div')`
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  width: 118.4px;
  height: 104px;
  display: flex;
  margin-bottom: 2.5rem;
  padding: 0 8px;
`;

const tokenColors = tokens.colors;

const getContrastYIQ = (hexcolor = '') => {
  const r = parseInt(hexcolor.substring(1, 3), 16);
  const g = parseInt(hexcolor.substring(3, 5), 16);
  const b = parseInt(hexcolor.substring(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};

const Color = ({ color = '', name = '' }) => {
  return (
    <StyleColor sx={{ background: color }}>
      <Typography color={getContrastYIQ(color)} variant="body_s">
        {color}-<b>{name}</b>
      </Typography>
    </StyleColor>
  );
};

const ColorShades = ({ colorKey = '', colors = {} }: { colorKey: string; colors: Record<string, string> }) => {
  const flattenedColors = colors;
  return (
    <div>
      <Typography variant="body_s">{colorKey}</Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        {Object.keys(flattenedColors).map((item, index) => {
          return <Color key={`color-${item}-${index}`} color={flattenedColors[item]} name={item} />;
        })}
      </Box>
    </div>
  );
};

export const Colors = (): JSX.Element => {
  return (
    <section>
      <Typography>PROJECT COLORS</Typography>

      <Color color={tokenColors?.primary[500] ?? ''} name={'primary'} />
      <Color color={tokenColors?.black ?? ''} name={'secondary'} />
      <Color color={tokenColors?.accent ?? ''} name={'accent'} />
      <Color color={tokenColors?.shade ?? ''} name={'shade'} />
      <ColorShades colorKey="Primary" colors={tokenColors?.primary} />

      <Typography>SUPPORTING COLORS</Typography>
      <ColorShades colorKey="Grey" colors={tokenColors?.grey} />
      <ColorShades colorKey="Warning" colors={tokenColors.warning} />
      <ColorShades colorKey="Error" colors={tokenColors.error} />
      <ColorShades colorKey="White Scale" colors={tokenColors.whiteScale} />
      <ColorShades colorKey="Info" colors={tokenColors.info} />
    </section>
  );
};

const meta = {
  title: 'Design System/Colors',
  component: Colors,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as Meta;

export default meta;
