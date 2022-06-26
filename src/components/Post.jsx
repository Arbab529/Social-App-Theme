import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Avatar,Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';

const Post = () => {
  return (
    <Card sx={{marginBottom:"20px"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe"><img src="https://cn.i.cdn.ti-platform.com/content/2167/we-baby-bears/showpage/fr/webabybears-icon.8db091e9.8db091e9.png" alt="A" /></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Arbab Anjum"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2022/02/09001905/Blockchain-Enabled-Video-Streaming.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{color:"red"}}/>}></Checkbox>
            
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>   
        </CardActions>
     </Card>
  )
}

export default Post