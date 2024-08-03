'use client'

import {mgr} from '@/service/OidcManager'
import {Box, Button} from '@mui/material'

export default function HomePage() {
  const login = () => mgr.signinRedirect({state: {foo: 'bar'}})
  return (
    <Box>
      <Box component="form" onClick={login}>
        <Button variant="outlined" type="submit">
          Signin
        </Button>
      </Box>
    </Box>
  )
}
