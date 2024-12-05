'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import {ReactNode} from 'react'
import Topbar from './components/Topbar'
import LoginGuard from '../LoginGuard'

export default function ExploreLayout({children}: {children: ReactNode}) {
  return (
    <LoginGuard>
      <Box>
        <Topbar />
        <Container>{children}</Container>
      </Box>
    </LoginGuard>
  )
}
