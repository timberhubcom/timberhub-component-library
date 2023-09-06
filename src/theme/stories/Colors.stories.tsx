import { css } from '@emotion/css'
import { Meta } from '@storybook/react'
import React from 'react'
import { Button, Typography } from 'src/components'
import { tokens } from 'src/theme/tokens'

export default {
  title: 'Design System/Colors',
} as Meta

async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand('copy', true, text)
  }
}

const Color = ({ color = '', name = '' }: { color: string; name: string }) => (
  <div className={styles.root}>
    <div className={styles.description}>
      <Typography variant={'headline_ss_xs'}>{name}</Typography>
      <Typography variant={'body_m'}>{color}</Typography>
    </div>
    <div style={{ backgroundColor: color }} />
    <div className={styles.actions}>
      <Button color={'grey'} size={'xs'} onClick={async () => await copyTextToClipboard(color)}>
        Copy HEX
      </Button>
      <Button
        color={'grey'}
        size={'xs'}
        onClick={async () => {
          const path = name.split('.')
          await copyTextToClipboard(
            name.includes('.') ? `tokens.colors.${path[0]}[${path[1]}]` : `tokens.colors.${name}`
          )
        }}>
        Copy token
      </Button>
    </div>
  </div>
)

export const Colors = ({ colors = tokens.colors, path = '' }: { colors: any; path: string }) => (
  <React.Fragment>
    {Object.entries(colors).map(([key, value]) => {
      if (typeof value === 'object') {
        return <Colors key={key} path={key + '.'} colors={value} />
      }
      if (typeof value === 'string') {
        return <Color key={key} name={path + key} color={value} />
      }
      return null
    })}
  </React.Fragment>
)

const styles = {
  root: css`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
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
}
