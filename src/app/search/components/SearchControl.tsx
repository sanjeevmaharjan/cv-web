'use client'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import {mgr} from '@/service/OidcManager'

type SearchControlProps = {
  setResult: (val: any) => void
}

export default function SearchControl({setResult}: SearchControlProps) {
  const handleSubmit = async (formData: FormData) => {
    const q = formData.get('q')
    const user = await mgr.getUser()

    const url = new URL('http://localhost:8081/api/cvs')
    if (typeof q === 'string' && !!q.trim()) {
      url.searchParams.set('q', q.trim())
    }

    console.log({url, user})
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${user?.access_token}`,
      },
    })

    setResult(await res.json())
  }
  return (
    <Box component="form" action={handleSubmit}>
      <TextField
        id="search-query"
        name="q"
        className="text"
        label="Search"
        variant="outlined"
        size="small"
      >
        Search
      </TextField>
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  )
}
