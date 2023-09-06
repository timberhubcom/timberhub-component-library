import { css } from '@emotion/css'
import { Divider } from '@mui/material'
import { Meta } from '@storybook/react'
import React from 'react'
import { Typography } from 'src/components'
import { tokens } from 'src/theme/tokens'

import { CustomTypographyVariants } from '../../types'

export default {
  title: 'Design System/Typography',
} as Meta

export const TypographyVariants = () => (
  <div className={styles.root}>
    {Object.entries(tokens.typography).map(([key, value]) => (
      <React.Fragment key={key}>
        <div className={styles.container}>
          <Typography variant={key as CustomTypographyVariants}>The Quick Brown Fox</Typography>
          <div>
            <Typography>{`variant: ${key}`}</Typography>
            <Typography>{`font-family: ${value.fontFamily}`}</Typography>
            <Typography>{`font-size: ${value.fontSize}`}</Typography>
            <Typography>{`font-weight: ${value.fontWeight}`}</Typography>
            <Typography>{`line-height: ${value.lineHeight}`}</Typography>
          </div>
        </div>
        <Divider />
      </React.Fragment>
    ))}
  </div>
)

const styles = {
  root: css`
    display: grid;
    gap: 32px;
  `,
  container: css`
    display: grid;
    gap: 16px;
  `,
}
