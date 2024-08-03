'use client'

import Logo from '@/app/logo/logo-no-background.svg'
// import {usePromiseResult} from '@/hooks/useResult'
import {mgr} from '@/service/OidcManager'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import Link from 'next/link'
import {User} from 'oidc-client-ts'
import {useEffect, useState} from 'react'
// import { useState } from 'react'

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
}

export default function Topbar() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    mgr.getUser().then((u) => {
      console.log({u})
      setUser(u)
    })
  }, [])

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box display="flex">
          <Box mr="1em">
            <Link href="/">
              <Image
                priority={true}
                src={Logo}
                width={500}
                height={500}
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Link>
          </Box>
          <Box>{user?.profile?.sub}</Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
