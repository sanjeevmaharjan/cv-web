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
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import ArrowUpward from '@mui/icons-material/ArrowUpward'
import ArrowDownward from '@mui/icons-material/ArrowDownward'
import Preview from '@mui/icons-material/Preview'
import React, {useDeferredValue} from 'react'

type ResultLineProps = {item: any}

export default function ResultLine({item}: ResultLineProps) {
  const [showMore, setShowMore] = React.useState(false)
  const [showPreview, setShowPreview] = React.useState(false)

  const handleShowMore = () => setShowMore(true)
  const handleHideShowMore = () => setShowMore(false)

  const handleShowPreview = () => setShowPreview(true)
  const handleHidePreview = () => setShowPreview(false)

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
      <ListItem sx={{pb: '1em'}} disablePadding>
        <ListItemText
          primary={
            <React.Fragment>
              Document Title{' '}
              <IconButton onClick={handleShowPreview} size="small">
                <Preview fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography component="div" variant="body2" fontStyle="italic">
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

                  {remaining && (
                    <Collapse in={showMore} timeout="auto" unmountOnExit>
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

                      <Button
                        variant="text"
                        onClick={handleHideShowMore}
                        size="small"
                        startIcon={<ArrowUpward />}
                      >
                        hide
                      </Button>
                    </Collapse>
                  )}

                  {!showMore && !!remaining?.length && (
                    <Button
                      variant="text"
                      onClick={handleShowMore}
                      size="small"
                      startIcon={<ArrowDownward />}
                    >
                      Show More
                    </Button>
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

      <Dialog open={showPreview} onClose={handleHidePreview} scroll="body">
        <DialogTitle>Document Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              component="div"
              dangerouslySetInnerHTML={{
                __html: item?.entity?.resumeHtml ?? item?.resumeHtml,
              }}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Divider variant="fullWidth" component="li" />
    </React.Fragment>
  )
}
