import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import {ReactNode} from 'react'
import Topbar from './components/Topbar'

export default function ExploreLayout({children}: {children: ReactNode}) {
  return (
    <Box>
      <Topbar />
      <Container>{children}</Container>
    </Box>
  )
}
