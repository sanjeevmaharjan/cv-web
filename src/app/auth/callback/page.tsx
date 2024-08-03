'use client'

import {mgr} from '@/service/OidcManager'
import Box from '@mui/material/Box'
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'

export default function CallbackPage() {
  const router = useRouter()
  useEffect(() => {
    mgr
      .signinCallback()
      .then((login) => {
        console.log({login})
        router.replace('/search')
      })
      .catch(console.error)
  }, [router])
  return <Box>Logging you in...</Box>
}
