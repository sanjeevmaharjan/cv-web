'use client'
import {createTheme} from '@mui/material/styles'
import {Roboto} from 'next/font/google'
import {ThemeOptions} from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF4405',
    },
    secondary: {
      main: '#05c0ff',
    },
    background: {
      paper: '#1A1A1A',
      default: '#1c1c1c',
    },
    text: {
      primary: '#F2F2F2',
    },
    error: {
      main: '#FF177F',
    },
  },
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme(themeOptions, {
  typography: {
    fontFamily: roboto.style.fontFamily,
    allVariants: {
      color: 'pink',
    },
  },
})

export default theme
