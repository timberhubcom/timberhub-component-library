export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import React from "react"
import { ThemeProvider } from "@mui/material/styles"

import { muiTheme } from "../src/config/mui-theme"

export const decorators = [
  (Story) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Story />
    </ThemeProvider>
  )
  }
]
