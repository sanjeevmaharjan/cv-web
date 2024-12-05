'use client'

import Logo from '@/app/logo/logo-no-background.svg'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
// import { useState } from 'react'

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
}

export default function Topbar() {
  // const [open, setOpen] = useState(false)

  // const toggleDrawer = (newOpen: boolean) => () => {
  //   setOpen(newOpen)
  // }

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)
    const offset = 128
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset
      sectionElement.scrollIntoView({behavior: 'smooth'})
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      })
      // setOpen(false)
    }
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box display="flex">
          <Box mr="1em">
            <Image
              priority={true}
              src={Logo}
              width={500}
              height={500}
              style={logoStyle}
              alt="logo of sitemark"
            />
          </Box>
          <Box display="flex">
            <MenuItem
              onClick={() => scrollToSection('features')}
              sx={{py: '6px', px: '12px'}}
            >
              <Typography variant="body2" color="text.primary">
                Features
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection('testimonials')}
              sx={{py: '6px', px: '12px'}}
            >
              <Typography variant="body2" color="text.primary">
                Testimonials
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection('highlights')}
              sx={{py: '6px', px: '12px'}}
            >
              <Typography variant="body2" color="text.primary">
                Highlights
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection('pricing')}
              sx={{py: '6px', px: '12px'}}
            >
              <Typography variant="body2" color="text.primary">
                Pricing
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection('faq')}
              sx={{py: '6px', px: '12px'}}
            >
              <Typography variant="body2" color="text.primary">
                FAQ
              </Typography>
            </MenuItem>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
