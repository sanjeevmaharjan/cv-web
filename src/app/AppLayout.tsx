'use client'

import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider} from '@mui/material/styles'
import theme from './theme'

export default function AppLayout({
  inter,
  children,
}: {
  inter: string
  children: React.ReactNode
}) {
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
