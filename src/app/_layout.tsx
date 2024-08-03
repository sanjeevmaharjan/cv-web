'use client'
import theme from './theme'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

export default function AppLayout(
  {inter, children}:
    { inter: string, children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body className={inter}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
