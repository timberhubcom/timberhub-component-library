import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import './globalStyles'

import { theme } from '../src'

export const decorators = [(storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Design System', 'MUI', 'Components'],
    },
  },
}
