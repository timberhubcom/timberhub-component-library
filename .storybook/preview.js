import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import './globalStyles'

import { muiTheme } from '../src'

export const decorators = [(storyFn) => <ThemeProvider theme={muiTheme}>{storyFn()}</ThemeProvider>]

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
