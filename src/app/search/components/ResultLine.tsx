// import TablePagination from '@mui/material/TablePagination'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Chip from '@mui/material/Chip'
import React, {useDeferredValue} from 'react'

type ResultLineProps = {item: any}

export default function ResultLine({item}: ResultLineProps) {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const displayWhenNoMatch = useDeferredValue(
    Array.isArray(item?.resumeText)
      ? undefined
      : item?.resumeText.slice(0, 300),
  )

  const firstTwo = useDeferredValue(
    Array.isArray(item?.resumeText) ? item.resumeText.slice(0, 2) : [],
  )
  const remaining = useDeferredValue(
    Array.isArray(item?.resumeText) ? item.resumeText.slice(2) : [],
  )

  return (
    <React.Fragment>
      <ListItem sx={{pb: '1em'}}>
        <ListItemText
          primary={<React.Fragment>Document Title</React.Fragment>}
          secondary={
            <React.Fragment>
              <Typography variant="body2" fontStyle="italic">
                <List>
                  {displayWhenNoMatch}
                  {firstTwo?.map?.((match: any, rIndex: number) => (
                    <ListItem key={rIndex} disablePadding>
                      <ListItemText
                        // primary="Matches"
                        secondary={
                          <Typography
                            component="span"
                            dangerouslySetInnerHTML={{__html: match}}
                          />
                        }
                      />
                    </ListItem>
                  ))}
                  {!open && !!remaining?.length && (
                    <Button variant="text" onClick={handleOpen} size="small">
                      ... show more
                    </Button>
                  )}

                  {remaining && (
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      {remaining?.map?.((match: any, rIndex: number) => (
                        <ListItemText
                          key={rIndex}
                          // primary="Matches"
                          secondary={
                            <Typography
                              component="span"
                              dangerouslySetInnerHTML={{__html: match}}
                            />
                          }
                        />
                      ))}

                      <Button variant="text" onClick={handleClose} size="small">
                        hide
                      </Button>
                    </Collapse>
                  )}
                </List>
              </Typography>
              <Typography variant="caption" component="span" mr="1em">
                Score: {item?.score}
              </Typography>

              <Tooltip title="Category" placement="top" arrow>
                <Chip
                  size="small"
                  variant="outlined"
                  color={
                    Array.isArray(item?.category) && !!item.category.length
                      ? 'primary'
                      : 'default'
                  }
                  label={item?.entity?.category ?? item?.category}
                />
              </Tooltip>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </React.Fragment>
  )
}
