'use client'

import {useState} from 'react'
import SearchControl from './SearchControl'
import Box from '@mui/material/Box'
import SearchResult from './SearchResult'

export default function Search() {
  const [result, setResult] = useState<any>(undefined)

  return (
    <main>
      <Box pt="2em">
        <SearchControl setResult={setResult} />
        <SearchResult result={result} />
      </Box>
    </main>
  )
}
