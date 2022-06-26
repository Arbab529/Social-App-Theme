import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed" width={400}>
        <Typography variant="h6"fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          <Avatar alt="Travis Howard" src="https://i.pinimg.com/originals/eb/e4/a3/ebe4a37984a8745e78555906765df486.jpg" />
          <Avatar alt="Agnes Walker" src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" />
          <Avatar alt="Trevor Henderson" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5" />
        </AvatarGroup>

        <Typography variant="h6"fontWeight={100} mt={2} mb={2}>
          Latest Images
        </Typography>

        <ImageList cols={3} gap={5}>
          <ImageListItem>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Hello" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://i.pinimg.com/originals/eb/e4/a3/ebe4a37984a8745e78555906765df486.jpg" alt="world" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" alt="Im.age" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6"fontWeight={100} mt={3}>
          Latest Conversations
        </Typography>


        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Arbab" src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

      </Box>
    </Box>
  )
}

export default Rightbar