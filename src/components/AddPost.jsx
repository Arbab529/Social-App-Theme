import { Box, Fab, Modal, Tooltip,styled, Typography, Avatar, Divider, TextField, Stack, Button } from '@mui/material'
import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const UserModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const UserBox = styled(Box)({
    margin:'20px 0',
    display: 'flex',
    gap:"10px",
    alignItems: 'center',
})
const AddPost = () => {
    const [open,setOpen] = useState(false);
  return (
    <>
        <Tooltip title="Add Post" sx={{position:"fixed",bottom:"20px",left:{xs:"calc(50% - 25px)",sm:20}}} onClick={()=>setOpen(true)}>
            <Fab color="primary">
                <AddIcon/>
            </Fab>
        </Tooltip>

        <UserModal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            >
            <Box sx={{width:"500px",borderRadius:"10px"}} bgcolor={"background.default"} color={"text.primary"} p={4}>
                <Typography variant="h6" color="gray" textAlign="center" mb={2}>Create Post</Typography>
                <Divider/>
                <UserBox>
                     <Avatar alt="Cindy Baker" src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" width="30" height="30"/>
                     <Typography variant="h6" >Arbab Anjum</Typography>
                </UserBox>
                <TextField
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    placeholder="What's on your mind?"
                    variant="standard"
                    sx={{width:"100%"}}
                    />

                <Stack direction="rox" gap={2} mt={2}>
                    <LocalOfferIcon color="primary"/>
                    <TagFacesIcon color="secondary"/>
                    <AddPhotoAlternateIcon color="success"/>
                    <VideoCallIcon color="error"/>
                </Stack> 
                <Button variant="contained" sx={{width:"100%",marginTop:"20px"}}>Post</Button>
            </Box>
        </UserModal>
    </>
  )
}

export default AddPost