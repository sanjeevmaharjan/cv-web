import Box from '@mui/material/Box'
// import TablePagination from '@mui/material/TablePagination'
import List from '@mui/material/List'
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'
import ResultLine from './ResultLine'

type SearchResultProps = {result: any}

export default function SearchResult({result}: SearchResultProps) {
  // console.log({result})

  return (
    <Box my="2em" display="flex" flexDirection="column">
      <Typography variant="overline">
        Total Results: {result?.page?.totalElements}
      </Typography>

      <List>
        {result?.content?.map((item: any, index: number) => (
          <ResultLine key={index} item={item} />
        ))}
      </List>

      <Box display="flex">
        <Pagination
          variant="outlined"
          count={+result?.page?.totalPages}
          page={+result?.page?.number}
          color="standard"
        />
      </Box>
    </Box>
  )
}
